const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc get a user
// @route GET /api/user/:id
// @access private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// @desc login user
// @route GET /api/user/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  const {phone, password} = req.body

  // find user with entered phone number
  const user = await User.findOne({phone})

  if (user && password && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({_id: user.id, name: user.name, phone: user.phone})
  } else {
    res.status(400)
    throw new Error("Invalid credential")
  }
});

// @desc get a user
// @route GET /api/user/id
// @access private
const getUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await User.find({_id: userId});
  res.status(200).json(user);
});

// @desc register a user
// @route POST /api/user
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const {name, phone, password} = req.body;

  // check payload available
  if (!name || !phone || !password) {
    res.status(400);
    throw new Error("Bad request. Name, phone and password are required");
  }
  // check phone number is already used
  const isPhoneExists = await User.findOne({phone});
  if (isPhoneExists) {
    res.status(404);
    throw new Error("Phone number already used");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const payload = {
    name,
    phone,
    password: hashedPassword,
  };

  const user = await User.create(payload);
  if (user) {
    res.status(201).json({_id: user.id, name: user.name, phone: user.phone});
  } else {
    res.status(400);
    throw new Error("User registration failed")
  }
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
  registerUser,
  updateUser,
  getAllUsers,
  loginUser
};
