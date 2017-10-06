const mongoose = require('mongoose');

// Clear out mongoose's model cache to allow --watch to work for tests:
// https://github.com/Automattic/mongoose/issues/1251
mongoose.models = {};
mongoose.modelSchemas = {};

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/question-me', { useMongoClient: true });

const SurveySchema = new mongoose.Schema({
    surveyID: {
        type: Number,
        required: true
    },
    questions: {
        type: [
            {
                questionID: {
                    type: Number,
                    required: true,
                }
            }
        ],
        required: true
    },
    hasScore: {
        default: false,
    },
    score: {
        type: [Number],
        default: null,
    }
})



module.exports = mongoose.model('Survey', SurveySchema);