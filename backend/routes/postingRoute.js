const postingRoute = require("express").Router();
const postingController = require("../controller/postingController");


const authentication= require("../middleware/tokenMiddleWare")


postingRoute.get("/", postingController.getPosting);
postingRoute.post("/add",authentication, postingController.createPosting);

module.exports = postingRoute;
