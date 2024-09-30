import React from 'react';
import profileImage from '../Images/profilepic.jpg';

function About() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
                <h1 className="text-4xl text-black font-bold mb-6 text-center">About the Developer</h1>
                
                <div className="flex justify-center mb-6">
                    <img 
                        src={profileImage}
                        alt="Developer" 
                        className="rounded-full w-40 h-40 object-cover border-4 border-blue"
                    />
                </div>
                <div className="text-center space-y-4">
                    <p className="text-lg text-black">
                        Hi, I'm John Naquin, the developer behind this Titanic Survival Predictor. I'm a passionate software developer with a strong background in 
                        full-stack web development, data science, and machine learning. With extensive experience in React, Python, and data visualization tools, 
                        I love creating applications that make complex data more accessible and usable.
                    </p>
                    <div className="flex justify-center space-x-4 mt-6">
                        <a
                            href="https://www.linkedin.com/in/john-naquin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue underline"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/John-Naquin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue underline"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
