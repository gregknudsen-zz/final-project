const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());







app.listen(5000, () => {
	console.log('Server listening on port 5000');
});