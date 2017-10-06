import React, { Component } from 'react';

const surveyJSON = { surveyId: '80bdb8d0-df07-439d-a165-4f953437aaca'}

class Question extends Component {
  
  // constructor()

  // sendDataToServer(survey) {
  //     survey.sendResult('7162fbc7-c403-45ab-9812-79d597ab0fc9');
  // }

  
  render() {
    return (
      <div>
        <p>I am a Question.</p>
      </div>
    )
  }
}



export default Question;



// ReactDOM.render(
//     <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));