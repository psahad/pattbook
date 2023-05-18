const express = require("express");
const router = express.Router();
const {getAllUsers, getUser, setUser, updateUser} = require("../controllers/userController");

router.route("/").get(getAllUsers).post(setUser);
router.route("/:id").get(getUser).put(updateUser);

module.exports = router;
