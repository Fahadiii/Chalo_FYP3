const express = require("express");
const router = express.Router();
const userRoutes = require("./user");

router.use("/user/Tourist", userRoutes);

module.exports = router;
