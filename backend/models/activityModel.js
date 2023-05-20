const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
  type: {
    type: String,
    enum: ["lend", "borrow"],
    default: "lend"
  },
  from: {
    type: mongoose.Types.ObjectId,
    required: [true, "User from is required"],
    ref: "User",
  },
  to: {
    type: mongoose.Types.ObjectId,
    required: [true, "User to is required"],
    ref: "User",
  },
  amount: {
    type: Number,
    min: [1, "Amount must be greater than zero"],
    required: [true, "Amount is required"],
  },
  purpose: {
    type: String
  },
  returnExpectedAt: {
    type: Date
  },
  status: {
    type: String,
    enum: ["request", "open", "close"],
    default: "open"
  },
  requestedAt: Date,
  openAt: Date,
  closeAt: Date
});

module.exports = mongoose.model("Activity", activitySchema);
