const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
  from: {
    type: mongoose.Types.ObjectId,
    required: [true, "User from is required"],
    ref: "User",
  },
  amount: {
    type: Number,
    required: [true, "Amount is required"],
  },
});

module.exports = mongoose.model("Activity", activitySchema);
