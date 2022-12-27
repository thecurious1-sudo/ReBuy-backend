const User = require("../models/user");
const Product = require("../models/product");
const userData = require("./userData");
const mongoose = require("mongoose");
const productsData = require("./productsData");
const Order = require("../models/order");
//import mongooseConnection from "../config/mongoose";
let { openConnection, closeConnection } = require("../config/mongoose");

const emptyDB = async () => {
  await openConnection();
  await User.deleteMany({});
  await Product.deleteMany({});
  await Order.deleteMany({});
};

const seed = async () => {
  await emptyDB();

  await closeConnection();
};

seed();
