const express = require("express")
const router = express.Router();
const {protect} = require("../middleware/authMiddleware")
const {getAllActivities, createActivity, updateActivity, getActivity} = require("../controllers/activityController");

router.route("/").get(protect, getAllActivities).post(protect, createActivity)
router.route("/:id").get(protect, getActivity).put(protect, updateActivity)

module.exports = router