const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../app");

describe("Testing products API", function () {
  it("Testing get products API", async function () {
    const response = await supertest(app).get("/api/v1/products/").expect(200);

    expect(response.body).to.be.an("object");
    expect(response.body.status).to.equal("OK");
    expect(response.body.data).to.be.an("array").that.is.not.empty;
  });

  it("Testing get product API with valid productId", async function () {
    const response = await supertest(app).get("/api/v1/products/3").expect(200);

    expect(response.body).to.be.an("object");
    expect(response.body.status).to.equal("OK");
    expect(response.body.data.id.toString()).to.equal("3");
    expect(response.body.data.name).to.equal("Optical Mouse");
    expect(response.body.data.price).to.equal(25);
    expect(response.body.data.quantity).to.equal(1);
  });

  it("Testing save product API", async function () {
    const newProduct = {
      name: "Washing Machine",
      description: "To wash clothes",
      price: 10000,
      quantity: 10,
    };

    const response = await supertest(app)
      .post("/api/v1/products/")
      .send(newProduct)
      .expect(201);

    expect(response.body).to.be.an("object");
    expect(response.body.status).to.equal("OK");
    expect(response.body.data.name).to.equal(newProduct.name);
    expect(response.body.data.price).to.equal(newProduct.price);
  });
});
