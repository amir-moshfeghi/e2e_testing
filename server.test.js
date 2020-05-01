const app = require("./server")
const supertest = require('supertest')
describe('POST /', function () {
  it('if user is valid ,will be logged in', function (done) {
      supertest(app)
          .get("/api/v1/auth/login/")
          .set('Accept', 'application/json')
          .expect(200, done);
  });
  it('if user is valid ,will be created', function (done) {
    supertest(app)
        .get("/api/v1/auth/register/")
        .set('Accept', 'application/json')
        .expect(201, done);
});
it('if user is valid ,will be create new password', function (done) {
  supertest(app)
      .get("/api/v1/auth/forgetpassword/")
      .set('Accept', 'application/json')
      .expect(200, done);
});


  
});
