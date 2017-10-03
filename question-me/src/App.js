import React, { Component } from 'react';
import { render } from 'react-dom';
import ProgressBar from './components/ProgressBar';
import Question from './components/Question';
import Results from './components/Results';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends Component  {
  render () {
    return (
    <div>
      <Question />
      <ProgressBar />
      <Results />
    </div>
    )
  }
}

export default App;