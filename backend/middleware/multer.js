const multer = require("multer");

const path = require("path");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + path.parse(file.originalname).name);
  },
});

const upload = multer({ storage: fileStorage });

module.exports = upload;
