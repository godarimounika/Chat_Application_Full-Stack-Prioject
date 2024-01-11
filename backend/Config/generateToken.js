const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "shh", {
    expiresIn: "100d",
  });
};
module.exports = generateToken;