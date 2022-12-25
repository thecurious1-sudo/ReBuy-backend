const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const cors = require("cors");

const { openConnection } = require("./config/mongoose");

const { authenticateToken } = require("./utils/jwtHelper");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//use routes from routes folder
app.use("/user", require("./routes/user"));

app.use("/products", authenticateToken, require("./routes/products"));

const startServer = async () => {
  await openConnection();
  await app.listen(4000, () => {
    console.log("Server started at port 4000");
  });
};

startServer();
