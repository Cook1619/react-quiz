import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container">
            <div className="card animate-fade-in">
                <div className="mb-8">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Quiz Master
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Test your knowledge with our interactive quiz game
                    </p>
                </div>
                
                <div className="space-y-4 w-full max-w-md">
                    <Link 
                        to="/game" 
                        className="btn btn-primary w-full text-lg py-4 animate-slide-up"
                        style={{animationDelay: '0.2s'}}
                    >
                        🎮 Start Game
                    </Link>
                    <Link 
                        to="/highScores" 
                        className="btn btn-secondary w-full text-lg py-4 animate-slide-up"
                        style={{animationDelay: '0.4s'}}
                    >
                        🏆 High Scores
                    </Link>
                </div>
            </div>
        </div>
    );
}

