const mongoose = require("mongoose");

const partnerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

const Partner = new mongoose.model("partner", partnerSchema);
module.exports = Partner;
