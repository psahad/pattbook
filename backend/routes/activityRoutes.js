const express = require("express")
const router = express.Router();
const {getAllActivities, createActivity} = require("../controllers/activityController")

router.route("/").get(getAllActivities).post(createActivity)

module.exports = router