const mongoose = require("mongoose");

mongoose.model("Profile", {
  name: String,
  description: String,
});
