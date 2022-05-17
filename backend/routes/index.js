const indexRoute = require("express").Router();

const homeController = require("../controller/homeController");

indexRoute.get("/", homeController.getHome);

const postingRoute = require("./postingRoute");
indexRoute.use("/posting", postingRoute);

const userRoute = require("./userRoute");
indexRoute.use("/user", userRoute);

module.exports = indexRoute;
