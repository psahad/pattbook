const Activity = require("../models/activityModel");
const asyncHandle = require("express-async-handler");
// @desc get all activities
// @route GET /api/activity
// @access private
const getAllActivities = (req, res) => {
  console.log(req);
};

// @desc create an activity
// @route POST /api/activity
// @access private
const createActivity = asyncHandle(async (req, res) => {
  const {type, to, from, amount, purpose, returnExpectedAt, status, requestedAt, openedAt, closedAt} = req.body;
  const date = new Date()
  let activity;

  // mandatory field validation
  if (!type || !amount || !status) {
    res.status(400)
    throw new Error ("Type, status and amount are required")
  } else if (!(status === "register" || status === "open" || status === "close") ) {
    res.status(400)
    throw new Error (`Status: ${status} is not valid`)
  }

  let payload = {
    type,
    amount,
    purpose,
    returnExpectedAt: returnExpectedAt ? returnExpectedAt.toISOString() : null,
    status: status ?? "open"
  }

  // add status change dates according to status
  if (status === "request") {
    payload = {
      ...payload, 
      requestedAt:  date.toISOString(),
      openedAt: null,
      closedAt: null,
    }
  } else if (status === "open") {
    payload = {
      ...payload, 
      requestedAt: requestedAt,
      openedAt: date.toISOString(),
      closedAt: null,
    }
  } else if (status === "closed") {
    payload = {
      ...payload, 
      requestedAt: requestedAt,
      openedAt: openedAt,
      closedAt: date.toISOString(),
    }
  }

  console.log(payload);

  
  // create activity according to activity type 
  if (type === "lend") {

    if (!to) {
      res.status(400)
      throw new Error ("User to is required")
    }

    const from = req.user.id
    
    activity = await Activity.create({...payload, to, from})
  } else {
    
    if (!from) {
      res.status(400)
      throw new Error ("User to is required")
    }
    const to = req.user.id
    activity = await Activity.create({...payload, to, from})
}

  if (activity) {
    res.status(201).json(activity)
  } else {
    res.status(400)
    throw new Error ("Activity creation failed")
  }


});

module.exports = {getAllActivities, createActivity};
