import React, { useState } from "react";

function Predictor() {
    const [age, setAge] = useState("");
    const [sex, setSex] = useState(""); 
    const [familySize, setFamilySize] = useState("");
    const [pclass, setPclass] = useState("");
    const [fare, setFare] = useState("");
    const [prediction, setPrediction] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            age: [parseFloat(age)],
            sex: [parseInt(sex)],
            family_size: [parseInt(familySize)],
            pclass: [parseInt(pclass)],
            fare: [parseFloat(fare)],
        };

        try {
            const response = await fetch("http://localhost:5000/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            setPrediction(result.prediction);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="text-2xl font-bold">
            <h1 className="underline">Titanic Survival Predictor</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-2">
                    <label>Age: </label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                        className="border px-2"
                    />
                </div>
                <div className="mb-2">
                    <label>Sex (0 for female, 1 for male): </label>
                    <input
                        type="number"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                        required
                        className="border px-2"
                    />
                </div>
                <div className="mb-2">
                    <label>Family Size: </label>
                    <input
                        type="number"
                        value={familySize}
                        onChange={(e) => setFamilySize(e.target.value)}
                        required
                        className="border px-2"
                    />
                </div>
                <div className="mb-2">
                    <label>Pclass: </label>
                    <input
                        type="number"
                        value={pclass}
                        onChange={(e) => setPclass(e.target.value)}
                        required
                        className="border px-2"
                    />
                </div>
                <div className="mb-2">
                    <label>Fare: </label>
                    <input
                        type="number"
                        value={fare}
                        onChange={(e) => setFare(e.target.value)}
                        required
                        className="border px-2"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Predict
                </button>
            </form>

            {prediction && (
                <div className="mt-4 text-lg text-black">
                    <strong>Prediction:</strong> {prediction}
                </div>
            )}
        </div>
    );
}

export default Predictor;
