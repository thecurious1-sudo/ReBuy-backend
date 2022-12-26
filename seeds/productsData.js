const { faker } = require("@faker-js/faker");
faker.seed(123);
faker.locale = "en_IND";

module.exports = async (user) => {
  let products = [];
  for (let i = 0; i < 5; i++) {
    const product = {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      img: faker.image.imageUrl(),
      user: user._id,
      address: faker.address.streetAddress(),
    };
    products.push(product);
  }
  return products;
};
