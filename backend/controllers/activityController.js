const mongoose = require("mongoose");
const Activity = require("../models/activityModel");
const asyncHandler = require("express-async-handler");

// @desc create an activity
// @route POST /api/activity
// @access private
const createActivity = asyncHandler(async (req, res) => {
  const {
    type,
    to,
    from,
    amount,
    purpose,
    returnExpectedAt,
    status,
    requestedAt,
    openedAt,
    closedAt,
  } = req.body;
  const date = new Date();
  let activity;

  // mandatory field validation
  if (!type || !amount || !status) {
    res.status(400);
    throw new Error("Type, status and amount are required");
  } else if (
    !(status === "register" || status === "open" || status === "close")
  ) {
    res.status(400);
    throw new Error(`Status: ${status} is not valid`);
  }

  let payload = {
    type,
    amount,
    purpose,
    returnExpectedAt: returnExpectedAt ? returnExpectedAt.toISOString() : null,
    status: status ?? "open",
  };

  // add status change dates according to status
  if (status === "request") {
    payload = {
      ...payload,
      requestedAt: date.toISOString(),
      openedAt: null,
      closedAt: null,
    };
  } else if (status === "open") {
    payload = {
      ...payload,
      requestedAt: requestedAt,
      openedAt: date.toISOString(),
      closedAt: null,
    };
  } else if (status === "closed") {
    payload = {
      ...payload,
      requestedAt: requestedAt,
      openedAt: openedAt,
      closedAt: date.toISOString(),
    };
  }

  // create activity according to activity type
  if (type === "lend") {
    if (!to) {
      res.status(400);
      throw new Error("User to is required");
    }
    const from = req.user.id;
    activity = await Activity.create({...payload, to, from});
  } else {
    if (!from) {
      res.status(400);
      throw new Error("User to is required");
    }
    const to = req.user.id;
    activity = await Activity.create({...payload, to, from});
  }

  if (activity) {
    res.status(201).json(activity);
  } else {
    res.status(400);
    throw new Error("Activity creation failed");
  }
});

// @desc get all activities
// @route GET /api/activity
// @access private
const getAllActivities = asyncHandler(async (req, res) => {
  const query = req.query;
  const activities = await Activity.find(query);
  res.status(200).json(activities);
});

// @desc get an activity
// @route GET /api/activity/:
// @access private
const getActivity = asyncHandler(async (req, res) => {
  const activityId = req.params.id;
  // check if activityId is present in the request or not
  const activity = await Activity.findById(activityId);
  if (!activity) {
    res.status(400);
    throw new Error("Activity not found");
  }

  // check whether user has permission to view this activity
  const userId = req.user.id;
  if (
    !(userId === activity.from.toString() || userId == activity.to.toString())
  ) {
    res.status(403);
    throw new Error("User has no permission to view this activity");
  }
  res.status(200).json(activity);
});

// @desc update activity
// @route PUT /api/activity/:id
// @access private
const updateActivity = asyncHandler(async (req, res) => {
  const activityId = req.params.id;
  const status = req.body.status;

  // check the activity id is valid
  const activity = await Activity.findById(activityId);
  if (!activity) {
    res.status(400);
    throw new Error("Activity not found");
  }

  //check status is present in the body
  if (!status) {
    res.status(400);
    throw new Error("Status not found in the body");
  } else if (!(status === "open" || status === "close")) {
    res.status(400);
    throw new Error(`Status: ${status} is not valid`);
  } else if (
    (status === "open" && activity.status === "open") ||
    (status === "close" && activity.status === "close")
  ) {
    res.status(400);
    throw new Error(`Activity status is already ${activity.status}`);
  }

  // check the user has permission to  update this activity
  const userId = req.user.id;
  if (activity.from.toString() !== userId) {
    res.status(403);
    throw new Error("User has no permission to update this activity");
  }

  // find update field. if it is status, update corresponding date too
  let updatingData;
  switch (status) {
    case "open":
      updatingData = {
        status: "open",
        openedAt: new Date().toISOString(),
      };
      break;
    case "close":
      updatingData = {
        status: "close",
        closedAt: new Date().toISOString(),
      };
      break;

    default:
      break;
  }

  const updatedActivity = await Activity.findByIdAndUpdate(
    activityId,
    updatingData,
    {
      returnDocument: "after",
    }
  );

  res.status(200).json(updatedActivity);
});

module.exports = {
  getAllActivities,
  createActivity,
  updateActivity,
  getActivity,
};
