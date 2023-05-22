const express = require("express")
const router = express.Router();
const {protect} = require("../middleware/authMiddleware")
const {getAllActivities, createActivity, updateActivity} = require("../controllers/activityController");

router.route("/").get(protect, getAllActivities).post(protect, createActivity)
router.route("/:id").put(protect, updateActivity)

module.exports = router