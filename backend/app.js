const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("./"));

const indexRoute = require("./routes");
app.use(indexRoute);

app.listen(port, () => {
  console.log(`port sedang berjalan di ${port}`);
});
