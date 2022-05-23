require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRoute = require("./routes");
app.use(indexRoute);

app.listen(port, () => {
  console.log(`port sedang berjalan di ${port}`);
});
