import React, { Component } from 'react'


class Game extends Component{


    constructor(props){

        super(props);
        const arrayValues = this.makeNewQuestion();

        this.state = {

            value1:arrayValues[0],
            value2:arrayValues[1],
            value3:arrayValues[2],
            proposedAnswer:arrayValues[3],
        };
    }

    makeNewQuestion = () => {

        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

        return [value1, value2, value3, proposedAnswer];
    };

    updateState = newArrayValues => {

        this.setState((currState) => ({

            value1:newArrayValues[0],
            value2:newArrayValues[1],
            value3:newArrayValues[2],
            proposedAnswer:newArrayValues[3],

        }));
    };


    


    handleAnswer = event => {
        
        const newArrayValues = this.makeNewQuestion();
        this.updateState(newArrayValues);
        const answerWasCorrect = this.evaluateAnswer(event.target.name);
        this.props.handleAnswer(answerWasCorrect);
    };


    resetGame = event => {

            this.props.resetGame(event.target.name === 'rst')
       
    }



    evaluateAnswer(givenAnswer){

        const {value1, value2, value3, proposedAnswer} = this.state;
        const corrAns = value1 + value2 + value3;

        return (
            (corrAns === proposedAnswer  &&  givenAnswer === 'true')||
            (corrAns !== proposedAnswer  &&  givenAnswer === 'false')
        );
    }



    render(){

        const {value1, value2, value3, proposedAnswer} = this.state;

        return(

        <div>
            <div className="equation">
                <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
            </div>
            <button onClick={this.handleAnswer} name="true">True</button>

            <button onClick={this.handleAnswer} name="false">False</button>
            <button onClick={this.resetGame} name="rst">Reset Game</button>
        </div>
        )
    }

}


export default Game;