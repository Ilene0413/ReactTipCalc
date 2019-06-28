// Dependencies
const router = require("express").Router();
const tipRoutes = require("./tips");

// Item routes
router.use("/tips", tipRoutes);

//Exporting
module.exports = router;