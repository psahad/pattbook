// @desc get a user
// @route GET /api/user/id
// @access private
const getUser = (req, res) => {
  res.status(200).json({
    message: "GET from users" + req.params.id,
  });
};

// @desc set a user
// @route POST /api/user
// @access public
const setUser = (req, res) => {
  res.status(201).json({
    message: "POST from users",
  });
};

// @desc update a user
// @route PUT /api/user/:id
// @access private
const updateUser = (req, res) => {
  res.status(200).json({
    message: "Update from users" + req.params.id,
  });
};

module.exports = {
  getUser,
  setUser,
  updateUser,
};
