import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container">
            <div className="card animate-fade-in">
                <div className="mb-8">
                    <h1 className="text-6xl font-bold mb-4" style={{
                        background: 'linear-gradient(to right, #2563eb, #8b5cf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
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
                        <span role="img" aria-label="Game controller">🎮</span> Start Game
                    </Link>
                    <Link 
                        to="/highScores" 
                        className="btn btn-secondary w-full text-lg py-4 animate-slide-up"
                        style={{animationDelay: '0.4s'}}
                    >
                        <span role="img" aria-label="Trophy">🏆</span> High Scores
                    </Link>
                </div>
            </div>
        </div>
    );
}

