import React from 'react';
import ProgressBar from './ProgressBar';

export default function HUD({ score, questionNumber }) {
    return (
        <div className="flex justify-between items-center mb-8 bg-white/20 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="flex-1">
                <p className="text-white/80 text-sm font-medium mb-2">Progress</p>
                <p className="text-white text-lg font-semibold mb-3">
                    Question {questionNumber}/10
                </p>
                <ProgressBar max={10} current={questionNumber} />
            </div>
            <div className="text-right">
                <p className="text-white/80 text-sm font-medium mb-2">Score</p>
                <h1 className="text-4xl font-bold text-white">
                    {score}
                </h1>
            </div>
        </div>
    );
}
