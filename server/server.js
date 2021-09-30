require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");
const cors = require("cors");
require("./config/config")(app, express, mongoose);

app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cors());

app.get("/", (req, res) => {
  res.send("Main Route");
});

const files = fs.readdirSync("./routes/");
files.forEach((item) => {
  if (item.endsWith(".js")) {
    require("./routes/" + item)(app);
  }
});
