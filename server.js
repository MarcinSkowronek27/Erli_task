const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const picturesRoutes = require('./routes/pictures.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', picturesRoutes);

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

// connects our backend code with the database
const NODE_ENV = process.env.NODE_ENV;
let dbUri = '';

if(NODE_ENV === 'test') dbUri = 'mongodb://localhost:27017/pictureDBtest';
else dbUri = 'mongodb://localhost:27017/picturesDB';

mongoose.connect(dbUri, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

const server = app.listen('8000', () => {
  console.log('Server is running on port: 8000');
});

module.exports = server;