require("dotenv").config({ path: require("find-config")(".env") });
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const dbUrl = process.env.MONGODB_URL;

module.exports.openConnection = async () => {
  return await mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("Connection established!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.closeConnection = async () => {
  mongoose.connection.close(() => {
    console.log("Connection closed");
  });
};
