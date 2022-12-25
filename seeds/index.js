const User = require("../models/user");
const Product = require("../models/product");
const userData = require("./userData");
const mongoose = require("mongoose");
const productsData = require("./productsData");
//import mongooseConnection from "../config/mongoose";
let { openConnection, closeConnection } = require("../config/mongoose");

const emptyDB = async () => {
  await openConnection();
  await User.deleteMany({});
  await Product.deleteMany({});
};

const seedUsers = async () => {
  const users = await userData();
  await User.insertMany(users);
};

const seedProducts = async () => {
  const users = await User.find({});
  for (let user of users) {
    const products = await productsData(user);
    const productsSaved = await Product.insertMany(products);
    user.products = productsSaved.map((product) => product._id);
    await user.save();
  }
};

const seed = async () => {
  await emptyDB();
  await seedUsers();
  await seedProducts();
  await closeConnection();
};

seed();
