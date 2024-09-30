import React from "react";
import { Link } from "react-router-dom";
import { FaShip, FaChartLine, FaUserFriends, FaShieldAlt } from "react-icons/fa";

function Home() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-start p-6">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 mt-10">
                <div className="flex flex-col md:flex-row items-center">
                    <FaShip className="text-blue text-6xl mb-4 md:mb-0 md:mr-6" />
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-extrabold text-blue mb-4">
                            Titanic Survival Predictor
                        </h1>
                        <p className="text-lg text-black mb-6">
                            Discover your chances of survival aboard the RMS Titanic using our advanced predictive model. 
                            Input your details and see the outcome!
                        </p>
                        <Link to="/predictor">
                            <button className="bg-blue text-black font-semibold py-2 px-6 rounded-lg shadow hover:bg-otherBlue transition duration-300">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-4xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                    <FaChartLine className="text-blue text-4xl mb-4" />
                    <h3 className="text-2xl font-semibold text-black mb-2">Data-Driven</h3>
                    <p className="text-black">
                        Our model analyzes historical data to predict survival probabilities based on key factors.
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                    <FaUserFriends className="text-blue text-4xl mb-4" />
                    <h3 className="text-2xl font-semibold text-black mb-2">User-Friendly</h3>
                    <p className="text-black">
                        Simply enter your details and receive instant predictions without any hassle.
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                    <FaShieldAlt className="text-blue text-4xl mb-4" />
                    <h3 className="text-2xl font-semibold text-black mb-2">Reliable Results</h3>
                    <p className="text-black">
                        Trust our accurate and reliable predictions based on comprehensive data analysis.
                    </p>
                </div>
            </div>

            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 mt-10">
                <h2 className="text-3xl font-bold text-black mb-6 text-center">About the Predictor</h2>
                <p className="text-black text-lg">
                    The Titanic Survival Predictor leverages machine learning algorithms trained on historical data to estimate the likelihood of survival for passengers aboard the RMS Titanic. By considering factors such as age, sex, family size, passenger class, and fare, our model provides insightful predictions that reflect real-world outcomes from this tragic event.
                </p>
            </div>
        </div>
    );
}

export default Home;
