const express = require("express");
const router = express.Router();
const {getUser, setUser, updateUser} = require("../controllers/userController");

router.route("/").post(setUser);
router.route("/:id").get(getUser).put(updateUser);

module.exports = router;
