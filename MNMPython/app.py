from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)  # Enable CORS for all domains so that the python code executes on the server

def getProductsDatabase() :
    import sqlite3 as sq
    Connection = sq.Connect('localhost')
    Cursor=Connection.cursor()
    Request="SELECT * FROM products"
    Cursor.execute(Request)
    Products=Cursor.fetchall()
    Cursor.close() 
    Connection.close()
    return(Products)

#Api from spring to retrive the client data
def getMedicalDataClientDatabase(id) :
    import sqlite3 as sq
    Connection = sq.Connect('localhost')
    Cursor=Connection.cursor()
    Request="SELECT * FROM medicaldata WHERE idclient=? ORDER BY date DESC LIMIT 1"
    Cursor.execute(Request , (id,))
    MedicalClient=Cursor.fetchone()
    Cursor.close() 
    Connection.close()
    return(MedicalClient)


ProductsFeatures=getProductsDatabase().len()
#Calculate Cosine Similarity 
def calculate_similarity(MedicalClient,ProductsFeatures):
    import numpy as np
    from sklearn.metrics.pairwise import cosine_similarity
    similarities = {}
    for product_id, product_features in ProductsFeatures.items():
        similarities[product_id] = cosine_similarity([product_features], [MedicalClient])[0][0]
    return (similarities)

#define the cosine similarity
def Recommendation(MedicalClient, ProductsFeatures,num_recommendations=10) :
    import numpy as np
    MedicalClient = np.array(MedicalClient)
    similarities = calculate_similarity(MedicalClient,ProductsFeatures)
    sorted_similarities = sorted(similarities.items(), key=lambda x: x[1], reverse=True)
    recommended_products = sorted_similarities[:num_recommendations]
    return (recommended_products)

def RecommendedJson(recommended_products):
    data={recommended_products} # just transform the data into a dictionary 
    return(data)




@app.route('/api/data')
def get_data(): # Send the data to be used by angular which is already available
    data = {'message': 'Hello from Flask API!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
