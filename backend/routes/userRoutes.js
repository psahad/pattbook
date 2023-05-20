const express = require("express");
const router = express.Router();
const {protect} = require("../middleware/authMiddleware")
const {getAllUsers, getUser, registerUser, updateUser, loginUser, getCurrentUser, updateCurrentUser} = require("../controllers/userController");

router.route("/").get(protect, getAllUsers).post(registerUser);
router.route("/login").post(loginUser)
router.route("/me").get(protect, getCurrentUser).put(protect, updateCurrentUser)
router.route("/:id").get(protect, getUser).put(protect, updateUser);

module.exports = router;
