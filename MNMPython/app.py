from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import mysql.connector as sq
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains so that the python code executes on the server

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

def getMedicalDataClientDatabase(id):
    try:
        Connection = sq.connect(host='localhost', port='3306', user='root', password='root', database='mnm_db')
        Cursor = Connection.cursor()
        Request = "SELECT * FROM medicaldata WHERE idclient=%s ORDER BY date DESC LIMIT 1"
        Cursor.execute(Request, (id,))
        MedicalClient = Cursor.fetchone()
        Cursor.close()
        Connection.close()
        return MedicalClient
    except sq.Error as e:
        print("The SQL Error is:    ", e)
        return None

def calculate_similarity(MedicalClient, ProductsFeatures):
    similarities = {}
    for product_id, product_features in ProductsFeatures.items():
        similarities[product_id] = cosine_similarity([product_features], [MedicalClient])[0][0]
    return similarities

def Recommendation(MedicalClient, ProductsFeatures, num_recommendations=10):
    MedicalClient = np.array(MedicalClient)
    similarities = calculate_similarity(MedicalClient, ProductsFeatures)
    sorted_similarities = sorted(similarities.items(), key=lambda x: x[1], reverse=True)
    recommended_products = sorted_similarities[:num_recommendations]
    return recommended_products

def RecommendedJson(recommended_products):
    data = [{'product_id': prod_id, 'similarity_score': sim_score} for prod_id, sim_score in recommended_products]
    return jsonify(data)

@app.route('/api/data')
def get_data():
    ProductsFeatures = getProductsDatabase()
    MedicalClient = getMedicalDataClientDatabase(123)
    if MedicalClient is not None and ProductsFeatures:
        recommended_products = Recommendation(MedicalClient, ProductsFeatures)
        return RecommendedJson(recommended_products)
    else:
        return jsonify({'error': 'Failed to retrieve data'}), 500

if __name__ == '__main__':
    app.run(debug=True)
