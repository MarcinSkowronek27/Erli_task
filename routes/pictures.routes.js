const express = require('express');
const router = express.Router();

const PictureController = require('../controllers/pictures.controller');

router.get('/pictures', PictureController.getAll);

router.get('/pictures/:id', PictureController.getId);

router.post('/pictures', PictureController.postAll);

module.exports = router;
