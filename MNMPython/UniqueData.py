import pandas as pd

# Load the CSV file into a DataFrame
df = pd.read_csv('DataSet.csv')

# Extract unique rows based on the 'selection1_name' column
unique_df = df.drop_duplicates(subset="selection1_name")

# Print the unique DataFrame
print(unique_df)

# Optionally, save the unique DataFrame to a new CSV file
unique_df.to_csv('unique_DataSet.csv', index=False)
