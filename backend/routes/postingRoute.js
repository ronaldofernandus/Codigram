const postingRoute = require("express").Router();
const postingController = require("../controller/postingController");


const authentication= require("../middleware/tokenMiddleWare")


postingRoute.get("/", postingController.getPosting);
postingRoute.post("/add",authentication, postingController.createPosting);
postingRoute.put("/:id",postingController.updatePosting);
postingRoute.delete("/:id",postingController.deletePosting);
postingRoute.get("/:id",postingController.getPostingById);

module.exports = postingRoute;
