const server = require("../app.js");
const request = require("supertest");

afterAll(() => {
  server.close();
});

describe("express server", () => {
  test("express install is correct", () => {
    const express = require("express");
    expect(express).not.toBeUndefined();
  });
  test("server run and listen correct", async () => {
    const response = await request(server).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Mi primer servidor con Express");
  });

  test("the server can receive POST requests", async () => {
    const response = await request(server).post("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("manejo de peticiones POST");
  });


  test("the server can receive PUT requests", async () => {
    const response = await request(server).put("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("manejo de peticiones PUT");
  });

  test("the server can receive DELETE requests", async () => {
    const response = await request(server).delete("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("manejo de peticiones DELETE");
  });
});
