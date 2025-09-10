import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from './Firebase/FirebaseContext';
import { push } from 'firebase/database';

export default function SaveScoreForm({ score, scoreSaved }) {
    const [username, setUsername] = useState('');
    const firebase = useFirebase();

    const onUsernameChange = (e) => {
        const updatedUsername = e.target.value;
        setUsername(updatedUsername);
    };

    const saveHighScore = (e) => {
        e.preventDefault();
        const record = {
            name: username,
            score
        };

        push(firebase.scores(), record).then(() => {
            scoreSaved();
        });
    };

    return (
        <div className="container">
            <div className="card animate-bounce-in">
                <div className="mb-8 text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-2">🎉 Game Complete!</h1>
                    <p className="text-2xl text-gray-600">Your Score:</p>
                    <div className="score-display mt-4">{score}</div>
                </div>
                
                <form onSubmit={saveHighScore} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-lg font-medium text-gray-700 mb-2">
                            Enter your name to save your score:
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter your name..."
                            value={username}
                            onChange={onUsernameChange}
                            className="input-field"
                            maxLength={20}
                        />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                            type="submit" 
                            className="btn btn-success flex-1" 
                            disabled={!username}
                        >
                            💾 Save Score
                        </button>
                        <Link 
                            to="/" 
                            className="btn btn-secondary flex-1 text-center"
                        >
                            🏠 Go Home
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}