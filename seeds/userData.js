const { faker } = require("@faker-js/faker");
const generateHashedPassword =
  require("../utils/passwordHelper.js").generateHashedPassword;
faker.seed(123);
faker.locale = "en_IND";
module.exports = async () => {
  let users = [];
  for (let i = 0; i < 5; i++) {
    const user = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: await generateHashedPassword("123456"),
      DOB: faker.date.birthdate(),
      address: faker.address.streetAddress(),
      phone: faker.phone.number(),
    };
    users.push(user);
  }
  return users;
};
