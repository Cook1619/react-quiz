import React, { useState } from 'react';

export default function Question({ question, changeQuestion }) {
    const [classToApply, setClassToApply] = useState('');
    const [selectedAnswer, setSelectedAnswer] = useState(-1);
    const [answering, setAnswering] = useState(false);

    const checkAnswer = (selectedAnswer) => {
        if (answering) return;

        setAnswering(true);
        setSelectedAnswer(selectedAnswer);

        const classToApply =
            selectedAnswer === question.answer ? 'correct' : 'incorrect';
        setClassToApply(classToApply);
        const bonus = selectedAnswer === question.answer ? 10 : 0;

        setTimeout(() => {
            setSelectedAnswer(-1);
            setAnswering(false);
            changeQuestion(bonus);
        }, 1000);
    };

    return (
        <div className="question-card animate-slide-up">
            <h2 
                className="text-2xl font-semibold text-gray-800 mb-8 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: question.question }}
            ></h2>
            
            <div className="space-y-4">
                {question.answerChoices.map((choice, index) => (
                    <button
                        key={index}
                        className={`choice-btn ${selectedAnswer === index ? classToApply : ''} ${
                            answering ? 'pointer-events-none' : 'hover:shadow-md'
                        }`}
                        onClick={() => checkAnswer(index)}
                        disabled={answering}
                    >
                        <div className="flex items-center">
                            <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                                {index + 1}
                            </span>
                            <span 
                                className="text-lg flex-1"
                                dangerouslySetInnerHTML={{ __html: choice }}
                            ></span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
