const postingRoute = require("express").Router();
const postingController = require("../controller/postingController");

postingRoute.get("/", postingController.getPosting);

module.exports = postingRoute;
