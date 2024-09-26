import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.metrics import accuracy_score, confusion_matrix

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

y_pred = model.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy:.2f}")

feature_importance = pd.DataFrame({
    'Feature': ['age', 'sex', 'family_size', 'pclass', 'fare'],
    'Coefficient': model.coef_[0]
})

print("\nFeature Importance (Logistic Regression Coefficients):")
print(feature_importance)

cm = confusion_matrix(y_test, y_pred)
print("\nConfusion Matrix:")
print(cm)

new_passenger = {
    'age': [20],
    'sex': [0],
    'family_size': [0],
    'pclass': [2],
    'fare': [15]
}

new_passenger_df = pd.DataFrame(new_passenger)

new_passenger_df[['age', 'family_size', 'pclass', 'fare']] = scaler.transform(new_passenger_df[['age', 'family_size', 'pclass', 'fare']])

new_prediction = model.predict(new_passenger_df)

if new_prediction[0] == 1:
    print("\nPrediction: Survived")
else:
    print("\nPrediction: Did not survive")

y_pred_probs = model.predict_proba(X_test)[:, 1]
threshold = 0.4
y_pred_adjusted = (y_pred_probs >= threshold).astype(int)

adjusted_accuracy = accuracy_score(y_test, y_pred_adjusted)
print(f"\nAdjusted Model Accuracy: {adjusted_accuracy:.2f}")

cm_adjusted = confusion_matrix(y_test, y_pred_adjusted)
print("\nConfusion Matrix (Adjusted Threshold):")
print(cm_adjusted)
