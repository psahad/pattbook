const express = require("express")
const router = express.Router();
const {protect} = require("../middleware/authMiddleware")
const {getAllActivities, createActivity} = require("../controllers/activityController");

router.route("/").get(protect, getAllActivities).post(protect, createActivity)

module.exports = router