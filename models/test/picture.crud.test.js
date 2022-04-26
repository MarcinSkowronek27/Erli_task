const Picture = require('../picture.model');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Picture', () => {

  before(async () => {

    try {
      await mongoose.connect('mongodb://localhost:27017/pictureDBtest', { useNewUrlParser: true, useUnifiedTopology: true });
    } catch (err) {
      console.error(err);
    }
  });

  describe('Reading data', () => {
    before(async () => {
      const testPicOne = new Picture({ url: 'https://images.pexels.com/photos/0051521/pexels-photo-0051521.jpeg?cs=srgb&dl=pexels-cottonbro-0051521.jpg&fm=jpg', urlCopy: 'https://images.pexels.com/photos/0051521/pexels-photo-0051521.jpeg?cs=srgb&dl=pexels-cottonbro-0051521.jpg&fm=jpg', addDate: 20/05/2022, downloadDate: 10/06/2022 });
      await testPicOne.save();

      const testPicTwo = new Picture({ url: 'https://images.pexels.com/photos/9991521/pexels-photo-9991521.jpeg?cs=srgb&dl=pexels-cottonbro-9991521.jpg&fm=jpg', urlCopy: 'https://images.pexels.com/photos/9991521/pexels-photo-9991521.jpeg?cs=srgb&dl=pexels-cottonbro-9991521.jpg&fm=jpg', addDate: 22/06/2022, downloadDate: 12/07/2022 });
      await testPicTwo.save();
    });

    it('should return all the data with "find" method', async () => {
      const pictures = await Picture.find();
      const expectedLength = 2;
      expect(pictures.length).to.be.equal(expectedLength);
    });

    it('should return a proper document by "url" with "findOne" method', async () => {
      const picture = await Picture.findOne( {url: 'https://images.pexels.com/photos/0051521/pexels-photo-0051521.jpeg?cs=srgb&dl=pexels-cottonbro-0051521.jpg&fm=jpg'});
      const expectedUrl = 'https://images.pexels.com/photos/0051521/pexels-photo-0051521.jpeg?cs=srgb&dl=pexels-cottonbro-0051521.jpg&fm=jpg';
      expect(picture.url).to.be.equal(expectedUrl);
    });

    after(async () => {
      await Picture.deleteMany();
    });

  });

  describe('Creating data', () => {

    it('should insert new document with "insertOne" method', async () => {
      const picture = new Picture({ url: 'https://images.pexels.com/photos/0051521/pexels-photo-0051521.jpeg?cs=srgb&dl=pexels-cottonbro-0051521.jpg&fm=jpg', urlCopy: 'https://images.pexels.com/photos/0051521/pexels-photo-0051521.jpeg?cs=srgb&dl=pexels-cottonbro-0051521.jpg&fm=jpg', addDate: 20/05/2022, downloadDate: 10/06/2022 });
      await picture.save();
      expect(picture.isNew).to.be.false;
    });

    after(async () => {
      await Picture.deleteMany();
    });

  });
});