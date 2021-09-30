const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Main Route");
});

app.listen(process.env.NODE_ENV || 8080, () => {
  console.log("Server started!");
});
