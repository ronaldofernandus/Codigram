const postingRoute = require("express").Router();
const postingController = require("../controller/postingController");

const authentication = require("../middleware/tokenMiddleWare");
const upload = require("../middleware/multer");

postingRoute.get("/", postingController.getPosting);
postingRoute.post(
  "/add",
  authentication,
  // upload.single("image"),
  // (req, res) => {
  //   res.send("data berhasil di upload");
  // },
  postingController.createPosting
);
postingRoute.put("/:id", postingController.updatePosting);
postingRoute.delete("/:id", postingController.deletePosting);
postingRoute.get("/:id", postingController.getPostingById);

module.exports = postingRoute;
