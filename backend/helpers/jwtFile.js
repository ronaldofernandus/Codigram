const jwt = require("jsonwebtoken");

const saltRounds = "limit";

const getJwt = (data) => {
  const {id, email, username, nama } = data;
  return jwt.sign(
    {id,
      email,
      username,
      nama,
    },
    saltRounds
  );
};

const getVerification = (data) => {
  return jwt.verify(data, saltRounds);
};

module.exports = { getJwt, getVerification };
