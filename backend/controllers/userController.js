const asyncHandler = require("express-async-handler")

// @desc get a user
// @route GET /api/user/id
// @access private
const getUser = asyncHandler(async(req, res) => {
  res.status(200).json({
    message: "GET from users" + req.params.id,
  });
});

// @desc set a user
// @route POST /api/user
// @access public
const setUser = asyncHandler(async(req, res) => {
  console.log(req.body);

  if (!req.body.userName) {
    res.status(400)
    throw new Error("User name is required")
  }
  res.status(201).json({
    message: "POST from users",
  });
});

// @desc update a user
// @route PUT /api/user/:id
// @access private
const updateUser = asyncHandler(async(req, res) => {
  res.status(200).json({
    message: "Update from users" + req.params.id,
  });
});

module.exports = {
  getUser,
  setUser,
  updateUser,
};
