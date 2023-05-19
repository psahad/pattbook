const express = require("express");
const router = express.Router();
const {getAllUsers, getUser, registerUser, updateUser, loginUser} = require("../controllers/userController");

router.route("/").get(getAllUsers).post(registerUser);
router.route("/login").post(loginUser)
router.route("/:id").get(getUser).put(updateUser);

module.exports = router;
