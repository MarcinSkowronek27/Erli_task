const express = require('express');
const cors = require('cors');
const app = express();

const picturesRoutes = require('./routes/pictures.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', picturesRoutes);

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
})

app.listen('8000', () => {
  console.log('Server is running on port: 8000');
});
