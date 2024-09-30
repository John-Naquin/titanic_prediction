import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

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
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl text-black font-bold mb-6 text-center">
                    Titanic Survival Predictor
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label className="text-black font-medium">Age:</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            className="bg-white text-black p-2 rounded border border-gray focus:outline-none focus:ring-2 focus:ring-blue"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-black font-medium flex items-center">
                            Sex:
                            <div className="relative group">
                                <FaQuestionCircle className="ml-2 text-blue cursor-pointer" />
                                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-56 bg-black text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg">
                                    Sex (0 = Female, 1 = Male)
                                </div>
                            </div>
                        </label>
                        <input
                            type="number"
                            value={sex}
                            onChange={(e) => setSex(e.target.value)}
                            required
                            className="bg-white text-black p-2 rounded border border-gray focus:outline-none focus:ring-2 focus:ring-blue"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-black font-medium flex items-center">
                            Family Size:
                            <div className="relative group">
                                <FaQuestionCircle className="ml-2 text-blue cursor-pointer" />
                                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-56 bg-black text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg">
                                    Number of family members traveling with you (e.g., siblings, parents)
                                </div>
                            </div>
                        </label>
                        <input
                            type="number"
                            value={familySize}
                            onChange={(e) => setFamilySize(e.target.value)}
                            required
                            className="bg-white text-black p-2 rounded border border-gray focus:outline-none focus:ring-2 focus:ring-blue"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-black font-medium flex items-center">
                            Pclass:
                            <div className="relative group">
                                <FaQuestionCircle className="ml-2 text-blue cursor-pointer" />
                                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-56 bg-black text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg">
                                    Passenger Class (1 = 1st, 2 = 2nd, 3 = 3rd)
                                </div>
                            </div>
                        </label>
                        <input
                            type="number"
                            value={pclass}
                            onChange={(e) => setPclass(e.target.value)}
                            required
                            className="bg-white text-black p-2 rounded border border-gray focus:outline-none focus:ring-2 focus:ring-blue"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-black font-medium flex items-center">
                            Fare:
                            <div className="relative group">
                                <FaQuestionCircle className="ml-2 text-blue cursor-pointer" />
                                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-56 bg-black text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg">
                                    Amount paid for the ticket (in British Pounds)
                                </div>
                            </div>
                        </label>
                        <input
                            type="number"
                            value={fare}
                            onChange={(e) => setFare(e.target.value)}
                            required
                            className="bg-white text-black p-2 rounded border border-gray focus:outline-none focus:ring-2 focus:ring-blue"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue text-black font-bold py-2 rounded-lg hover:bg-otherBlue transition duration-300"
                    >
                        Predict
                    </button>
                </form>

                {prediction && (
                    <div className="mt-6 p-4 bg-blue rounded-lg text-center">
                        <span className="text-black text-lg font-bold">Prediction:</span> {prediction}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Predictor;
