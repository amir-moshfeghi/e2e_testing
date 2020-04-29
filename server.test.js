const app = require("./server")
const supertest = require('supertest')
test("POST /", done => {
  supertest(app)
    .post("/api/v1/auth/login/")
    // api lists:
    // .post("/api/v1/auth/register/")
    // .post("/api/v1/auth/verify/")
    // .post("/api/v1/auth/forgetpassword/")
    // .post("/api/v1/auth/profile/")
    // .post("/api/v1/auth/user/")
    // .post("/api/v1/category/")
    // .post("/api/v1/profile/ads/")
    // .post("/api/v1/currency/")
    // .post("/api/v1/area/")
    // .post("/api/v1/ads/")
    // .post("/api/v1/contact/")
    // .post("/api/v1/admins/ads/")

    .expect(200)
    
    .end(done)
})
