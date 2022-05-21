const userRoute = require("express").Router();
const userController = require("../controller/userController");

const upload = require("../middleware/multer");

userRoute.get("/", userController.getUsers);
userRoute.post("/register", upload.single("profile"), userController.register);
userRoute.post("/login", userController.login);
userRoute.put("/:id", userController.updateUser);
userRoute.get("/:id", userController.getUsersById);

module.exports = userRoute;
