import mysql.connector as sq
import numpy as np
import pandas as pd
import random

# Define the possible values for random selection
FoodAllergies = ["Gluten", "Dairy", "Omnivore", "None"]
FoodType = ["Vegan", "Vegetarian", "Omnivore", "None"]
BloodPressure = [1, 0]
BloodSugar = [1, 0]
Medical = ["Diabetes", "Hypertension", "Asthma", "None"]

# Read the CSV file
csv_file_path = 'unique_huyiytui.csv'
data = pd.read_csv(csv_file_path)

# Clean column names by stripping any leading or trailing whitespace
data.columns = data.columns.str.strip()
print("Cleaned Columns in the DataFrame:", data.columns)

# Fill NaN values with default values
data = data.fillna({
    'Name': '',                # Default value for text fields
    'Price': 0,                # Default value for numeric fields (use 0 or an appropriate value)
    'Image': '',
    'Description': '',
})

# Check for remaining NaN values and report
print("NaN values in the DataFrame:\n", data.isna().sum())

# Connect to the database
Connection = sq.connect(host='localhost', port='3306', user='root', password='root', database='mnm_db')
Cursor = Connection.cursor()

# Define the SQL insert query
Request = """
INSERT INTO products (name, price, image, description, foodtype, foodallergies, bloodsugar, bloodpressure, medical) 
VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
"""

# Insert each row into the database
for i, row in data.iterrows():
    Cursor.execute(Request, (
        row['Name'], 
        row['Price'], 
        row['Image'], 
        row['Description'], 
        random.choice(FoodType), 
        random.choice(FoodAllergies), 
        random.choice(BloodSugar), 
        random.choice(BloodPressure), 
        random.choice(Medical)
    ))

# Commit the transaction
Connection.commit()

# Close the cursor and connection
Cursor.close()
Connection.close()

print("Data inserted successfully")
