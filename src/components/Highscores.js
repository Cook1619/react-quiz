import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from './Firebase/FirebaseContext';
import { get } from 'firebase/database';

export default function HighScores() {
    const firebase = useFirebase();
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        get(firebase.scores()).then((snapshot) => {
            const data = snapshot.val();
            console.log('Firebase data:', data); // Debug log
            const sortedScores = formatScoreData(data);
            setScores(sortedScores);
            setLoading(false);
        }).catch((error) => {
            console.error('Error loading scores:', error);
            setLoading(false);
            setScores([]); // Set empty array on error
        });
    }, [firebase]);

    const formatScoreData = (firebaseScores) => {
        if (!firebaseScores) {
            return []; // Return empty array if no data
        }
        
        const scores = [];

        for (let key in firebaseScores) {
            const val = firebaseScores[key];
            val['key'] = key;
            scores.push(val);
        }

        return scores
            .sort((score1, score2) => score2.score - score1.score)
            .slice(0, 10);
    };

    return (
        <div className="container">
            {loading && (
                <div className="flex flex-col items-center">
                    <div className="loader mb-4"></div>
                    <p className="text-xl text-white animate-pulse">Loading high scores...</p>
                </div>
            )}
            {!loading && (
                <div className="card animate-fade-in">
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
                            <span role="img" aria-label="Trophy">🏆</span> High Scores
                        </h1>
                        <p className="text-gray-600 text-lg">Top 10 Quiz Masters</p>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                        {scores.length > 0 ? (
                            scores.map((record, index) => (
                                <div key={record.key} className="high-score-item animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                                    <div className="flex items-center">
                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white mr-4 ${
                                            index === 0 ? 'bg-yellow-500' :
                                            index === 1 ? 'bg-gray-400' :
                                            index === 2 ? 'bg-orange-600' :
                                            'bg-blue-500'
                                        }`}>
                                            {index + 1}
                                        </span>
                                        <span className="font-semibold text-gray-800 flex-1">{record.name}</span>
                                    </div>
                                    <span className="text-2xl font-bold text-blue-600">{record.score}</span>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-gray-500 text-lg">No scores yet! Be the first to play!</p>
                            </div>
                        )}
                    </div>
                    
                    <Link 
                        to="/" 
                        className="btn btn-primary w-full text-lg py-4"
                    >
                        <span role="img" aria-label="Home">🏠</span> Back to Home
                    </Link>
                </div>
            )}
        </div>
    );
}
