const User = require("../models/user");
const userData = require("./userData");
const mongoose = require("mongoose");
//import mongooseConnection from "../config/mongoose";
let { openConnection, closeConnection } = require("../config/mongoose");

const emptyDB = async () => {
  await openConnection();
  await User.deleteMany({});
};

const seedUsers = async () => {
  const users = await userData();
  await User.insertMany(users);
};

const seed = async () => {
  await emptyDB();
  await seedUsers();
  await closeConnection();
};

seed();
