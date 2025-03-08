const assert = require("assert");
const http = require("http");
const app = require("../app");

describe("GET /", function () {
  let server;

  before(function (done) {
    server = app.listen(3000, done);
  });

  after(function () {
    server.close();
  });

  it("should return a 200 status and render the index page", function (done) {
    http
      .get("http://localhost:3000/", function (res) {
        assert.strictEqual(res.statusCode, 200);
        assert.ok(res.headers["content-type"].includes("html"));
        done();
      })
      .on("error", done);
  });
});
