const bcrypt = require("bcrypt");
const saltRounds = 10;

const encrypt = (data) => {
  return bcrypt.hashSync(data, saltRounds);
};

const decrypt = (data, encryptPwd) => {
  return bcrypt.compareSync(data, encryptPwd);
};

module.exports = { encrypt, decrypt };
