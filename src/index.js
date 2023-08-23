const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(3001, () => {
    console.log('running o port 3001');
});