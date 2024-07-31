const router = require("express").Router();
const Partner = require("../database/models/partnerModel");

router.post("/addPartner", async (req, res) => {
  try {
    let partner = Partner(req.body);
    await partner.save();
    res.json({ success: true });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
