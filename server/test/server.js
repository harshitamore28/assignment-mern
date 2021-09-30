let server=require("../server");
//let server2= require("../server/routes/userRoutes");
let chai=require("chai");
let chaiHttp=require("chai-http");

//Assertion
chai.should();
chai.use(chaiHttp);

describe('SERVER APIs',() => {
    describe('Test GET route /getListOfPlaces',() =>{
        it("It should return all restaurants",(done) => {
            chai.request(server)
            .get("/getListOfPlaces")
            .end((err,response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
                response.body.length.should.not.be.eq(0);
            done();
            });
        });

    })


});

describe("SERVER APIs", () => {
  describe("Test GET route /posts", () => {
    it("It should return all queries", (done) => {
      chai
        .request(server)
        .get("/posts")
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });
});

describe("SERVER APIs", () => {
  describe("Test POST route /posts", () => {
    it("It should post a query", (done) => {
        let query = {
          restaurantName:"abc",
          firstName: "def",
          lastName: "ghi",
          mobileNo: "9999999999",
          query: "hi",
        };
      
        chai
        .request(server)
        .post("/posts")
        .send(query)
        .end((err, response) => {
          response.should.have.status(201);
          done();
        });
    });
  });
});

describe("SERVER APIs", () => {
  describe("Test POST route /api/users", () => {
    it("It should register a user", (done) => {
      let user = {
        name: "abc",
        email: "def@abc",
        password: "ghi",
      };

      chai
        .request(server)
        .post("/api/users")
        .send(user)
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });
});

describe("SERVER APIs", () => {
  describe("Test POST route /api/users/login", () => {
    it("It should check the credentials of a user", (done) => {
      let user1 = {
        email: "def@abc",
        password: "ghi",
      };

      chai
        .request(server)
        .post("/api/users/login")
        .send(user1)
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });
});
