const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const cors = require("cors");

const { openConnection } = require("./config/mongoose");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//use routes from routes folder
app.use("/user", require("./routes/user"));

// app.get("/", async (req, res) => {
//   await User.insertMany([
//     {
//       name: "John",
//       email: randomString(10) + "@gmail.com",
//       password: "asd",
//     },
//   ]);
//   res.send("Hello World");
// });

// app.post("/login", (req, res) => {
//   // Authenticate User
//   const username = req.body.username;
//   const user = { username };
//   const accessToken = generateAccessToken(user);
//   res.json({ status: "ok", data: accessToken });
// });

// app.post("/accessResource", authenticateToken, test);

// function generateAccessToken(username) {
//   return jwt.sign(username, process.env.JWT_SECRET, {
//     expiresIn: 7 * 24 * 60 * 60,
//   });
// }

// function authenticateToken(req, res, next) {
//   const token = req.body.token;
//   jwt.verify(token, JWT_SECRET, (err, verifiedJwt) => {
//     if (err) {
//       res.send(err.message);
//       console.log(err);
//     } else {
//       res.locals.userId = verifiedJwt.username;
//       next();
//     }
//   });
// }

// function test(req, res, next) {
//   res.send(res.locals.userId);
// }

const startServer = async () => {
  await openConnection();
  await app.listen(4000, () => {
    console.log("Server started at port 4000");
  });
};

startServer();
