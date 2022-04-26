const chai = require('chai');
const chaiHttp = require('chai-http');
const Picture = require('../../models/picture.model');
const server = require('../../server.js');

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('GET /api/pictures', () => {

  before(async () => {
    const testPicOne = new Picture({ _id: '5d9f1140f10a81216cfd4408', url: 'https://images.pexels.com/photos/0051521/pexels-photo-0051521.jpeg?cs=srgb&dl=pexels-cottonbro-0051521.jpg&fm=jpg',  urlCopy: 'https://images.pexels.com/photos/0051521/pexels-photo-0051521.jpeg?cs=srgb&dl=pexels-cottonbro-0051521.jpg&fm=jpg', addDate: 01/01/2022, downloadDate: 02/01/2022 });
    await testPicOne.save();

    const testPicTwo = new Picture({ _id: '5d9f1159f81ce8d1ef2bee48', url: 'https://images.pexels.com/photos/0051521/pexels-photo-0051521.jpeg?cs=srgb&dl=pexels-cottonbro-0051521.jpg&fm=jpg',  urlCopy: 'https://images.pexels.com/photos/0051521/pexels-photo-0051521.jpeg?cs=srgb&dl=pexels-cottonbro-0051521.jpg&fm=jpg', addDate: 01/01/2022, downloadDate: 02/01/2022  });
    await testPicTwo.save();
  });

  after(async () => {
    await Picture.deleteMany();
  });

  it('/ should return all pictures', async () => {
    const res = await request(server).get('/api/pictures');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.equal(2);

  });

  it('/:id should return one picture by :id ', async () => {
    const res = await request(server).get('/api/pictures/5d9f1140f10a81216cfd4408');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.length).to.not.be.null;
  });

});