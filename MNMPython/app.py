from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains

@app.route('/api/data')
def get_data(): # define how the client data will be importad 
    data = {'message': 'Hello from Flask API!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
