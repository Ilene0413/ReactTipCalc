// Dependencies
const router = require("express").Router();
const tipsController = require("../../controllers/tipsController");

// Matches with "/api/tips"
router.route("/")
	.get(tipsController.calcTip)
	// .post(booksController.create);

router.route("/tips")
	.get(tipsController.calcTip);


// Exporting
module.exports = router;