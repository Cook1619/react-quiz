import React, { Component } from 'react'
import Question from './Question'

const dummyQuestion = {
    question: "Whats the best programming language?",
    answerChoices: ['JS', 'Java', 'C#', 'Fortran']
}

export default class Game extends Component {
    render() {
        return (
            <>
                <Question question={dummyQuestion}/>
            </>
        )
    }
}

