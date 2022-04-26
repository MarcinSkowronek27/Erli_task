const express = require('express');
const Picture = require('../models/picture.model');
const router = express.Router();

const PictureController = require('../controllers/pictures.controller');

router.get('./pictures', PictureController.getAll);

router.get('/pictures/:id', PictureController.getId);

router.post('/pictures', PictureController.postAll);

module.exports = router;
