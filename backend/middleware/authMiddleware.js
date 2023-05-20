const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  // let token = req.headers.authorization
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token form header
      token = req.headers.authorization.split(" ")[1];

      // verify token and get user id from token
      let decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get user data
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
        console.log("error");
      res.status(401);
      throw new Error("Not authorized");
    }
  } else {
    res.status(401);
    throw new Error("No token found, Not authorized");
  }
});

module.exports = {protect};
