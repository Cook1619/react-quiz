import React from 'react';

export default function ProgressBar({ max, current }) {
    const width = (current / max) * 100;
    return (
        <div className="progress-bar">
            <div 
                className="progress-fill" 
                style={{ width: `${width}%` }}
            ></div>
        </div>
    );
}