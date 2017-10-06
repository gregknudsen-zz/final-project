import React, { Component } from 'react';
import { render } from 'react-dom';
import ProgressBar from './components/ProgressBar';
import Question from './components/Question';
import Results from './components/Results';

class App extends Component  {
  render () {
    return (
    <div>
      <Question />
      {/* <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } /> */}
      <ProgressBar />
      <Results />
    </div>
    )
  }
}

export default App;

