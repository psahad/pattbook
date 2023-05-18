const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc get a user
// @route GET /api/user/id
// @access private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// @desc get a user
// @route GET /api/user/id
// @access private
const getUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await User.find({_id: userId});
  res.status(200).json(user);
});

// @desc set a user
// @route POST /api/user
// @access public
const setUser = asyncHandler(async (req, res) => {
  if (!req.body.userName) {
    res.status(400);
    throw new Error("User name is required");
  }
  const user = await User.create({user_name: req.body.userName});
  res.status(201).json({user});
});

// @desc update a user
// @route PUT /api/user/:id
// @access private
const updateUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const payload = {
    user_name: req.body.userName,
  };
  
  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const updatedUser = await User.findByIdAndUpdate(userId, payload, {
    new: true,
  });

  res.status(200).json(updatedUser);
});

module.exports = {
  getUser,
  setUser,
  updateUser,
  getAllUsers,
};
