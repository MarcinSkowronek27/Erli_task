const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');
const Picture = require('../../models/picture.model');

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('POST /api/pictures', () => {

  after(async () => {
    await Picture.deleteMany();
  });

  it('/ should insert new document to db and return success', async () => {
    const res = await request(server).post('/api/pictures').send({ url: 'https://images.pexels.com/photos/9991521/pexels-photo-9991521.jpeg?cs=srgb&dl=pexels-cottonbro-9991521.jpg&fm=jpg', urlCopy: 'https://images.pexels.com/photos/9991521/pexels-photo-9991521.jpeg?cs=srgb&dl=pexels-cottonbro-9991521.jpg&fm=jpg', addDate: 22/06/2022, downloadDate: 12/07/2022 });
    const newPicture = await Picture.findOne({url: 'https://images.pexels.com/photos/9991521/pexels-photo-9991521.jpeg?cs=srgb&dl=pexels-cottonbro-9991521.jpg&fm=jpg', urlCopy: 'https://images.pexels.com/photos/9991521/pexels-photo-9991521.jpeg?cs=srgb&dl=pexels-cottonbro-9991521.jpg&fm=jpg', addDate: 22/06/2022, downloadDate: 12/07/2022});
    expect(res.status).to.be.equal(200);
    expect(res.body.message).to.be.equal('OK');
    expect(newPicture).to.not.be.null;
  });

});