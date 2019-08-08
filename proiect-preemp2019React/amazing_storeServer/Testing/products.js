"use strict";
const request = require("supertest");
const app = require("../app");

describe("GET/products", function() {
  it("responds to json", function(done) {
    request(app)
      .get("/products")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /products/:id", function() {
  it("responds to json", function(done) {
    request(app)
      .get("/products/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
describe("POST /products", function() {
  it("responds to json", function(done) {
    request(app)
      .get("/products/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
describe("DELETE /products/:id", function() {
  it("responds to json", function(done) {
    request(app)
      .get("/products/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
describe("PATCH /products/:id", function() {
  it("responds to json", function(done) {
    request(app)
      .get("/products/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
