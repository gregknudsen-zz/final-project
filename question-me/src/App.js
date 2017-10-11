import React, { Component } from 'react';
import { render } from 'react-dom';
import ProgressBar from './components/ProgressBar';
import Question from './components/Question';
import Results from './components/Results';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

const data = {
  bindto: '#root',
  columns: [
    ['Hero', 3, 2, 1, 4, 5, 2, 3, 2, 1, 4, 5, 2, 3, 2, 1, 4, 3, 2],
    ['data2', 5, 4, 2, 4, 5, 5,3, 2, 1, 4, 1, 2, 3, 2, 1, 4, 1, 2],
    ['data3', 3, 2, 1, 4, 5, 2, 3, 2, 1, 4, 5, 2, 3, 2, 1, 4, 5, 2],
    ['data4', 3, 2, 3, 5, 5, 5, 3, 2, 1, 4, 3, 3, 3, 2, 1, 4, 5, 3],
    ['data5', 3, 2, 1, 4, 3, 2, 3, 2, 1, 2, 5, 2, 3, 2, 1, 3, 5, 2]
  ]
};

class App extends Component  {
  render () {
    return (
    <div>
      <Question />
      {/* <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } /> */}
      <ProgressBar />
      <Results />
      <C3Chart data={data} />
    </div>
    )
  }
}

export default App;

 
// const mountNode = document.getElementById('react-c3js');
 
 
// ReactDOM.render();