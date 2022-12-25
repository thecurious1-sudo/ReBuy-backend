const User = require("../models/user");
const {
  generateHashedPassword,
  compareHashPassword,
} = require("../utils/passwordHelper");
const { generateAccessToken } = require("../utils/jwtHelper");
const ERRORS = require("../utils/errors/user");

module.exports.signupController = async (req, res) => {
  try {
    const { name, email, username, password, DOB, address, phone } = req.body;
    const user = new User({
      name,
      email,
      username,
      password: await generateHashedPassword(password),
      DOB,
      address,
      phone,
    });
    await user.save();
    const data = {
      id: user._id,
    };
    res.json({
      status: "ok",
      data: data,
      token: await generateAccessToken(data),
    });
  } catch (err) {
    console.log(err.message);
    res.json({ status: "error", message: ERRORS.SIGNUP_VALIDATION_ERROR });
  }
};

module.exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        status: "error",
        message: ERRORS.LOGIN_VALIDATION_ERROR_USER_NOT_EXISTS,
      });
    }
    const isPasswordValid = await compareHashPassword(password, user.password);
    if (!isPasswordValid) {
      return res.json({
        status: "error",
        message: ERRORS.LOGIN_VALIDATION_ERROR_PASSWORD_INVALID,
      });
    }
    const data = {
      id: user._id,
    };
    res.json({
      status: "ok",
      data: data,
      token: await generateAccessToken(data),
    });
  } catch (err) {
    console.log(err.message);
    res.json({ status: "error", message: ERRORS.LOGIN_VALIDATION_ERROR });
  }
};
