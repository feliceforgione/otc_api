const mongoose = require("mongoose");
const { connect, disconnect, saveUser, findUser } = require("./db");
const User = require("../models/userModel");

jest.mock("./db");

describe("User Tests", () => {
  beforeAll(async () => {
    return await connect();
  });

  test("As a user I want to save a user to the database", async () => {
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: "Jane",
      lastName: "Doe",
      address: "100 Main Street",
      city: "New York",
      state: "NY",
      zipcode: "55555",
      email: "email@email.com",
      password: "password",
    });

    const user = await saveUser(newUser);
    expect(user.firstName).toEqual("Jane");
    expect(user.lastName).toEqual("Doe");
    expect(user.address).toEqual("100 Main Street");
    expect(user.city).toEqual("New York");
    expect(user.state).toEqual("NY");
    expect(user.zipcode).toEqual("55555");
    expect(user.email).toEqual("email@email.com");
    expect(user.password).toEqual("password");
  });

  test("As a user i want to find a user by any property", async () => {
    const obj = { firstName: "Jane" };

    const user = await findUser(obj);
    expect(user.firstName).toEqual("Jane");
    expect(user.lastName).toEqual("Doe");
    expect(user.address).toEqual("100 Main Street");
    expect(user.city).toEqual("New York");
    expect(user.state).toEqual("NY");
    expect(user.zipcode).toEqual("55555");
    expect(user.email).toEqual("email@email.com");
    expect(user.password).toEqual("password");
  });

  afterAll(async () => {
    return await disconnect();
  });
});
