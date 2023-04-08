var request = require("supertest");
var app = require("../index.js");
describe("GET /", function() {
 it("respond with hello world", function(done) {
 //navigate to root and check the the respon1se1111111 is `hello world"
 request(app).get("/").expect("hello world", done);
 });
});