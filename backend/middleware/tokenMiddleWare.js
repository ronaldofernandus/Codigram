const { getVerification } = require("../helpers/jwtFile");

const authentication = (req, res, next) => {
  const getToken = req.headers.get_token;

  if (getToken) {
    console.log("token Ada");
  } else {
    res.status(403).json({
      message: "token not found",
    });
    next();
  }
};

module.exports = authentication;
