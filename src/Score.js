import React, { Component } from 'react'


class Score extends Component{


    render(){

        return(

          <p className="text">
            Your Score: {this.props.correctAnswer}/{this.props.numQuestions}
          </p>
        )
    }


}


export default Score