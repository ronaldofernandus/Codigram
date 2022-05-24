const express = require("express");
const app = express();

const path = require("path");

const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());
require("dotenv").config();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/images", express.static(path.join(__dirname, "images")));

const indexRoute = require("./routes");
app.use(indexRoute);

app.listen(port, () => {
  console.log(`port sedang berjalan di ${port}`);
});
