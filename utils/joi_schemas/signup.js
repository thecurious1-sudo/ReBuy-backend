const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  repeat_password: Joi.ref("password"),
  DOB: Joi.date().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
});

console.log(
  schema.validate({
    username: "abc",
    birth_year: 1994,
    password: "123",
    repeat_password: "123",
    email: "asdas@gmail.com",
  })
);
