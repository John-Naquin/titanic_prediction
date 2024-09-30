from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder, StandardScaler

app = Flask(__name__)
CORS(app) 

df = pd.read_excel('titanic3.xls')
df = df[['age', 'sex', 'sibsp', 'parch', 'pclass', 'fare', 'survived']]
df['age'].fillna(df['age'].median(), inplace=True)
df['fare'].fillna(df['fare'].median(), inplace=True)

label_encoder = LabelEncoder()
df['sex'] = label_encoder.fit_transform(df['sex'])

df['family_size'] = df['sibsp'] + df['parch'] + 1

X = df[['age', 'sex', 'family_size', 'pclass', 'fare']]
y = df['survived']

scaler = StandardScaler()
X[['age', 'family_size', 'pclass', 'fare']] = scaler.fit_transform(X[['age', 'family_size', 'pclass', 'fare']])

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LogisticRegression(class_weight='balanced')
model.fit(X_train, y_train)

@app.route('/predict', methods=['POST'])
def predict():
    input_data = request.json
    new_passenger_df = pd.DataFrame(input_data)
    new_passenger_df[['age', 'family_size', 'pclass', 'fare']] = scaler.transform(new_passenger_df[['age', 'family_size', 'pclass', 'fare']])
    prediction = model.predict(new_passenger_df)
    result = 'Survived' if prediction[0] == 1 else 'Did not survive'
    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True)
