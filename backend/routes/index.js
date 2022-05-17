const indexRoute = require("express").Router();

const homeController = require("../controller/homeController");

indexRoute.get("/", homeController.getHome);

module.exports = indexRoute;
