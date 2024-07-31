const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/EpicDB").then((res) => {
  console.log("Database Connected");
});
