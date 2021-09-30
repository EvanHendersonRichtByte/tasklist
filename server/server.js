const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Main Route");
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server started!");
});
