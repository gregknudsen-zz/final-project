const fs = require('fs');

const readQuestions = () => {
    // cache Questions after reading them once

    
      const contents = fs.readFileSync('/../questions.json', 'utf8');
      console.log(contents);
      const savedQuestions = JSON.parse(contents);
    
  };

  console.log(readQuestions());