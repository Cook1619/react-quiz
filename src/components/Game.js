import React, { Component } from 'react'
import Question from './Question'
import { loadQuestions } from '../helpers/QuestionsHelper';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: null,
            currentQuestion: null,
            loading: true,
            score: 0
        };
    }
    async componentDidMount() {
        try {
            const questions = await loadQuestions();
            this.setState({
                questions
            }, () => {
                this.changeQuestion();
            });
        } catch (err) {
            console.log(err)
        }
    }

    changeQuestion = (bonus = 0) => {
        //get random index of a question
        const randomQuestionIndex = Math.floor(Math.random() * this.state.questions.length);
        //set current question to the question at that random index
        const currentQuestion = this.state.questions[randomQuestionIndex]
        //remove that questions from question array
        const remainingQuestions = [...this.state.questions];
        remainingQuestions.splice(randomQuestionIndex, 1);
        //update state to reflect these questions
        this.setState((prevState) => ({ 
                questions: remainingQuestions, 
                currentQuestion, 
                loading: false,
                score: prevState.score += bonus}))
    }
    render() {
        return (
            <>
                {this.state.loading && <div id="loader"></div>}
                {!this.state.loading && this.state.currentQuestion && (
                    <Question question={this.state.currentQuestion} changeQuestion={this.changeQuestion}/>
                )}

            </>
        )
    }
}

