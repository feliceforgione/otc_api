const mongoose = require("mongoose");
const { connect, disconnect, saveUser, findUser } = require("../db/db");
const User = require("../models/userModel");

describe("User Tests", () => {
  beforeAll(async () => {
    return await connect();
  });

  test("As a user I want to save a user to the database", async () => {
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: "Felice",
      lastName: "Forgione",
      address: "100 Main Street",
      city: "New York",
      state: "NY",
      zipcode: "55555",
      email: "email@email.com",
      password: "password",
    });

    const user = await saveUser(newUser);
    expect(user.firstName).toEqual("Felice");
    expect(user.lastName).toEqual("Forgione");
    expect(user.address).toEqual("100 Main Street");
    expect(user.city).toEqual("New York");
    expect(user.state).toEqual("NY");
    expect(user.zipcode).toEqual("55555");
    expect(user.email).toEqual("email@email.com");
    expect(user.password).toEqual("password");
  });

  test("As a user i want to find a user by any property", async () => {
    const obj = { firstName: "Felice" };
    const user = await findUser(obj);
    expect(user.firstName).toEqual("Felice");
  });

  afterAll(async () => {
    return await disconnect();
  });
});
