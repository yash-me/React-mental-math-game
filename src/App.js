import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Score from './Score';

class App extends Component {

  state = {
    correctAnswer:0,
    numQuestions:0,
    result:'',
  };

  resetGame = rst => {

      if(rst){

        this.setState(currState => ({

              correctAnswer:0,
              numQuestions:0,

        }));

      }
  }



  handleAnswer = answerWasCorrect => {



      if(this.state.numQuestions === 10){

        this.setState(currState => ({

            correctAnswer:0,
            numQuestions:0,
        }));

      }

      if(answerWasCorrect){
        this.setState(currState => ({

            correctAnswer: currState.correctAnswer + 1, 
        }));
      }

      this.setState(currState => ({

          numQuestions:currState.numQuestions +1,
      }));



      if(this.state.correctAnswer === 9){

          this.setState(currState => ({

                result:'You win!',
                correctAnswer:10,
          }));
      }

      else{

        this.setState(currState => ({

              result:'',
        }));
      }
  };

 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Game</h1>
          <p>Result:{this.state.result}</p>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          
          <Game handleAnswer={this.handleAnswer} resetGame={this.resetGame}/>
          <Score correctAnswer={this.state.correctAnswer} numQuestions={this.state.numQuestions}/>
        </div>
      </div>
    );
  }
}

export default App;
