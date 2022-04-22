const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/pictures', (req, res) => {
  req.db.collection('pictures').find().toArray((err, data) => {
    if(err) res.status(500).json({ message: err });
    else res.json(data);
  });
});

router.get('/pictures/:id', (req, res) => {
  res.json(db.pictures.find(item => item.id == req.params.id));
});

router.post('/pictures', (req, res) => {
  const { name, client } = req.body;
  db.pictures.push({ id: 3, name, client })
  res.json({ message: 'OK' });
});



module.exports = router;
