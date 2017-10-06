const mongoose = require('mongoose');

// Clear out mongoose's model cache to allow --watch to work for tests:
// https://github.com/Automattic/mongoose/issues/1251
mongoose.models = {};
mongoose.modelSchemas = {};

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/question-me', { useMongoClient: true });

const QuestionSchema = new mongoose.Schema({
    questionID: {
        type: Number,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        default: null
    },
    surveyID: {
        type: Number,
        required: true,
        default: null
    },
    

});



module.exports = mongoose.model('Questions', QuestionSchema);