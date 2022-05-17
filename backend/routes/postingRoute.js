const postingRoute = require("express").Router();
const postingController = require("../controller/postingController");





postingRoute.get("/", postingController.getPosting);
postingRoute.post("/add", postingController.createPosting);

module.exports = postingRoute;
