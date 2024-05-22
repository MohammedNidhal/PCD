from flask import Flask, jsonify
from flask_cors import CORS
import json
import mysql.connector as sq
import numpy as np
import random
from sklearn.preprocessing import OneHotEncoder
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains so that the python code executes on the server

# Define the possible values for random selection
FoodAllergies = ["Gluten", "Dairy", "Omnivore", "None"]
FoodType = ["Vegan", "Vegetarian", "Omnivore", "None"]
BloodPressure = [1, 0]
BloodSugar = [0, 1]
Medical = ["Diabetes", "Hypertension", "Asthma", "None"]

ClientMedicalData = [random.choice(FoodType), random.choice(FoodAllergies), random.choice(BloodSugar), random.choice(BloodPressure), random.choice(Medical)]


# Get All the products in the database
def getProductsDatabase():
    try:
        Connection = sq.connect(host='localhost', port='3306', user='root', password='root', database='mnm_db')
        Cursor = Connection.cursor()
        Request = "SELECT * FROM products"
        Cursor.execute(Request)
        Products = Cursor.fetchall()
        Cursor.close()
        Connection.close()
        return Products
    except sq.Error as e:
        print("Error:", e)
        return []


ProductsFeatures = getProductsDatabase()


def calculate_similarity(ClientMedicalData, ProductsFeatures):
    ClientMedicalDataNumerical = [item for item in ClientMedicalData if isinstance(item, (int, float))]
    ClientMedicalDataCategorical = [item for item in ClientMedicalData if isinstance(item, str)]
    similarities = {}

    # Define all possible categories for fitting the encoder
    all_possible_categories = [
        FoodAllergies + FoodType + Medical
    ]

    encoder = OneHotEncoder(categories=all_possible_categories, handle_unknown='ignore')
    encoder.fit(np.array(all_possible_categories).reshape(-1, 1))

    for product in ProductsFeatures:
        product = list(product)
        ProductNumerical = [item for item in product[5:] if isinstance(item, (int, float))]
        ProductCategorical = [item for item in product[5:] if isinstance(item, str)]

        if ClientMedicalDataNumerical and ProductNumerical:
            ClientMedicalDataNumerical = np.array(ClientMedicalDataNumerical).reshape(1, -1)
            ProductNumerical = np.array(ProductNumerical).reshape(1, -1)

            print("ClientMedicalDataNumerical shape:", ClientMedicalDataNumerical.shape)
            print("ProductNumerical shape:", ProductNumerical.shape)

            NumericalSimilarity = cosine_similarity(ProductNumerical, ClientMedicalDataNumerical)[0][0]
        else:
            NumericalSimilarity = 0  # Handle case with no numerical data

        if ClientMedicalDataCategorical and ProductCategorical:
            ClientEncoded = encoder.transform(np.array(ClientMedicalDataCategorical).reshape(-1, 1)).toarray()
            ProductEncoded = encoder.transform(np.array(ProductCategorical).reshape(-1, 1)).toarray()

            CategoricalSimilarity = cosine_similarity(ClientEncoded, ProductEncoded)[0][0]
        else:
            CategoricalSimilarity = 0  # Handle case with no categorical data

        CombinedSimilarity = (NumericalSimilarity + CategoricalSimilarity) / 2

        similarities[product[0]] = CombinedSimilarity

    return similarities


def Recommendation(MedicalClient, ProductsFeatures, num_recommendations=10):
    MedicalClient = np.array(MedicalClient)
    similarities = calculate_similarity(MedicalClient, ProductsFeatures)
    sorted_similarities = sorted(similarities.items(), key=lambda x: x[1], reverse=True)
    recommended_products = []
    for product_id, similarity in sorted_similarities[:num_recommendations]:
        for product in ProductsFeatures:
            if product[0] == product_id:
                recommended_products.append({
                    "id": product[0],
                    "name": product[1],
                    "price": product[2],
                    "image": product[3],
                    "description": product[4],
                    "similarity": similarity
                })
                break
    return recommended_products


def RecommendedJson(recommended_products):
    data = []
    for product in recommended_products:
        product_data = {
            "product_id": product["id"],
            "name": product["name"],
            "price": product["price"],
            "image": product["image"],
            "description": product["description"],
            "similarity_score": product["similarity"]
        }
        data.append(product_data)
    return json.dumps(data)


@app.route('/api/data')
def get_data():
    ProductsFeatures = getProductsDatabase()
    MedicalClient = ClientMedicalData
    if MedicalClient and ProductsFeatures:
        recommended_products = Recommendation(MedicalClient, ProductsFeatures,15)
        return RecommendedJson(recommended_products)
    else:
        return jsonify({'error': 'Failed to retrieve data'}), 500


if __name__ == '__main__':
    app.run(debug=True)
