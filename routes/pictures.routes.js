// post.routes.js

const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/pictures', (req, res) => {
  res.json(db.pictures);
});

router.get('/pictures/random', (req, res) => {
  res.json(db.pictures[Math.floor(Math.random() * db.length)]);
});

router.get('/pictures/:id', (req, res) => {
  res.json(db.pictures.find(item => item.id == req.params.id));
});

router.post('/pictures', (req, res) => {
  const { name, client } = req.body;
  db.pictures.push({ id: 3, name, client })
  res.json({ message: 'OK' });
});

router.put('/pictures/:id', (req, res) => {
  const { name, client } = req.body;
  db = db.pictures.map(item => (item.id == req.params.id) ? { ...item, name, client } : item );
  res.json({ message: 'OK' });
});

router.delete('/pictures/:id', (req, res) => {
  db = db.pictures.filter(item => item.id != req.params.id)
  res.json({ message: 'OK' });
});

module.exports = router;
