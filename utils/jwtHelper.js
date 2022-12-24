require("dotenv").config({ path: require("find-config")(".env") });
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports.generateAccessToken = async (data) => {
  return jwt.sign(data, JWT_SECRET, {
    expiresIn: 7 * 24 * 60 * 60,
  });
};

module.exports.authenticateToken = async (req, res, next) => {
  const token = req.body.data;
  jwt.verify(token, JWT_SECRET, (err, verifiedJwt) => {
    if (err) {
      res.send({ status: "error", message: err.message });
    } else {
      res.locals.userId = verifiedJwt.id;
      next();
    }
  });
};
