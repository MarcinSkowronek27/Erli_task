const express = require('express');
const Picture = require('../models/picture.model');
const router = express.Router();

// router.get('/pictures', (req, res) => {
//   req.db.collection('pictures').find().toArray((err, data) => {
//     if (err) res.status(500).json({ message: err });
//     else res.json(data);
//   });
// });

router.get('/pictures', async (req, res) => {
  try {
    res.json(await Picture.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

// router.get('/pictures/:id', (req, res) => {
//   req.db.collection('pictures').findOne({ _id: ObjectId(req.params.id) }, (err, data) => {
//     if (err) res.status(500).json({ message: err });
//     else if (!data) res.status(404).json({ message: 'Not found' });
//     else res.json(data);
//   });
// });

router.get('/pictures/:id', async (req, res) => {

  try {
    const pic = await Picture.findById(req.params.id);
    if(!pic) res.status(404).json({ message: 'Not found' });
    else res.json(pic);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }

});

// router.post('/pictures', (req, res) => {
//   const { url } = req.body;
//   console.log(url);
//   req.db.collection('pictures').insertOne({ url: url }, err => {
//     if (err) res.status(500).json({ message: err });
//     else res.json({ message: 'OK' });
//   })
// });

router.post('/pictures', async (req, res) => {

  try {

    const { url, urlCopy, addDate, downloadDate } = req.body;
    const newPicture = new Picture({ url, urlCopy, addDate, downloadDate });
    await newPicture.save();
    res.json({ message: 'OK' });

  } catch (err) {
    res.status(500).json({ message: err });
  }

});


module.exports = router;
