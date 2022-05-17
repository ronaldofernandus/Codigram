const jwt = require("jsonwebtoken");
const saltRoundd = "test";

const getJwt = (data) => {
  const { email, username, nama } = data;
  return jwt.sign(
    {
      email,
      username,
      nama,
    },
    saltRoundd
  );
};
module.exports = getJwt;
