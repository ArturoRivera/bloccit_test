const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {

  describe("GET /", () => {
    it("should return status code 200 and have 'Welcome to Bloccit' in the body of the response", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Welcome to Bloccit");
        done();
      });
    });
  });

  describe("GET /about", () => {
    it("should have 'About Us' in the body of the response", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("About Us");
        done();
      });
    });
  });

  describe("GET /marco", () => {
    it("should return status code 200", done => {
      request.get("http://localhost:3000/marco", (err, res, body) => {
        expect(res.statusCode).toBe(200);

        done();
      });
    });

    it("should return string 'polo' ", done => {
      request.get("http://localhost:3000/marco", (err, res, body) => {
        expect(body).toContain("polo");

        done();
      });
    });
  });
});
