const request = require('supertest');
const expect = require('expect');

const app = require('./server.js').app;

describe('Server', () => {
  describe('#get /', () => {
    it('should return "hello world" from root of server', done => {
      request(app)
        .get('/')
        .expect(404)
        .expect(res => {
          expect(res.body).toInclude({
            error: 'page not found'
          });
        })
        .end(done);
    });
  });
  describe('#get /users', () => {
    it('should assure that my user exists', done => {
      request(app)
        .get('/users')
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({ name: 'weslley', age: 21 });
        })
        .end(done);
    });
  });
});
