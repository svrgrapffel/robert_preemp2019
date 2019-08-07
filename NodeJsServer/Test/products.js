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

describe("GET/categories", function() {
  it("responds to json", function(done) {
    request(app)
      .get("/categories")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
