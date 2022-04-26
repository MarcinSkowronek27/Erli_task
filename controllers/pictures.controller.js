const Picture = require('../models/picture.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Picture.find());
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getId = async (req, res) => {

  try {
    const pic = await Picture.findById(req.params.id);
    if (!pic) res.status(404).json({ message: 'Not found' });
    else res.json(pic);
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.postAll = async (req, res) => {

  try {

    const { url, urlCopy, addDate, downloadDate } = req.body;
    const newPicture = new Picture({ url, urlCopy, addDate, downloadDate });
    await newPicture.save();
    res.json({ message: 'OK' });

  } catch (err) {
    res.status(500).json({ message: err });
  }
};