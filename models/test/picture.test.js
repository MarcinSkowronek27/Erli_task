const Picture = require('../picture.model');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Picture', () => {

  it('should throw an error if no "url" arg', () => {
    const pic = new Picture({});

    pic.validate(err => {
      expect(err.errors.url).to.exist;
    });
  });

  it('should throw an error if no "urlCopy" arg', () => {
    const pic = new Picture({});

    pic.validate(err => {
      expect(err.errors.urlCopy).to.exist;
    });
  });

  it('should throw an error if no "addDate" arg', () => {
    const pic = new Picture({});

    pic.validate(err => {
      expect(err.errors.addDate).to.exist;
    });
  });

  it('should throw an error if no "downloadDate" arg', () => {
    const pic = new Picture({});

    pic.validate(err => {
      expect(err.errors.downloadDate).to.exist;
    });
  });

  it('should throw an error if "url, urlCopy" is not a string', () => {

    const cases = [{}, []];
    for (let url of cases) {
      const pic = new Picture({ url });

      pic.validate(err => {
        expect(err.errors.url).to.exist;
      });

    }

    for (let urlCopy of cases) {
      const pic = new Picture({ urlCopy });

      pic.validate(err => {
        expect(err.errors.url).to.exist;
      });

    }

  });

  it('should throw an error if "addDate, downloadDate" is not a date', () => {

    const cases = [[], 'text', {}];
    for (let addDate of cases) {
      const pic = new Picture({ addDate });

      pic.validate(err => {
        expect(err.errors.addDate).to.exist;
      });
    }

    for (let downloadDate of cases) {
      const pic = new Picture({ downloadDate });

      pic.validate(err => {
        expect(err.errors.downloadDate).to.exist;
      });
    }
  });

  it('should not throw an error if "url" is okay', () => {

    const url = 'https://images.pexels.com/photos/11741441/pexels-photo-11741441.jpeg?cs=srgb&dl=pexels-danil-lysov-11741441.jpg&fm=jpg'

    const pic = new Picture({ url });
    pic.validate(err => {
      expect(err.errors.url).not.to.exist;
    });
  });

  it('should not throw an error if "urlCopy" is okay', () => {

    const urlCopy = 'https://images.pexels.com/photos/11741441/pexels-photo-11741441.jpeg?cs=srgb&dl=pexels-danil-lysov-11741441.jpg&fm=jpg'

    const pic = new Picture({ urlCopy });
    pic.validate(err => {
      expect(err.errors.urlCopy).not.to.exist;
    });
  });

  it('should not throw an error if "addDate, downloadDate" is okay', () => {

    const cases = [25 / 05 / 2022, 22/05/10, '10.10.2022', '10/10/2022']

    for (let addDate of cases) {
      const pic = new Picture({ addDate });
      pic.validate(err => {
        expect(err.errors.addDate).not.to.exist;
      });
    }

    for (let downloadDate of cases) {
      const pic = new Picture({ downloadDate });
      pic.validate(err => {
        expect(err.errors.downloadDate).not.to.exist;
      });
    }
  });
});
