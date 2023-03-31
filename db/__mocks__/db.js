const connect = async () => {
  console.log("MongoDB Mock is up and running");
};

const disconnect = async () => {
  console.log("MongoDB Mock  disconnected");
};

const saveUser = async (newUser) => {
  return Promise.resolve({
    firstName: "Jane",
    lastName: "Doe",
    address: "100 Main Street",
    city: "New York",
    state: "NY",
    zipcode: "55555",
    email: "email@email.com",
    password: "password",
  });
};

const findUser = async (obj) => {
  return Promise.resolve({
    firstName: "Jane",
    lastName: "Doe",
    address: "100 Main Street",
    city: "New York",
    state: "NY",
    zipcode: "55555",
    email: "email@email.com",
    password: "password",
  });
};

module.exports = { connect, disconnect, saveUser, findUser };
