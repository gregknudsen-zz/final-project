const readQuestions = () => {
    // cache Questions after reading them once
    if (!savedQuestions) {
      const contents = fs.readFileSync('questions.json', 'utf8');
      savedQuestions = JSON.parse(contents);
    }
    return savedQuestions;
  };