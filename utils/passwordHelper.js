const bcrypt = require("bcrypt");
const saltRounds = 10;
module.exports.generateHashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

module.exports.compareHashPassword = async (password, hash) => {
  const result = await bcrypt.compare(password, hash);
  return result;
};
