const asynHandler = require("express-async-handler");
// Instead of try catch we r using asynHandler

// @descrip Get goals
// @route GET /api/goals
// @access Private
const getGoals = asynHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});
//async is used because we r connecting with database

// @descrip Set goals
// @route Post api/goals
// @access Private
const setGoals = asynHandler(async (req, res) => {
  //   console.log(req.body);
  if (!req.body.text) {
    res.status(400); //.json({ message: "Please add a text field" });
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goals" });
});

// @descrip Update goals
// @route Put api/goals/:id
// @access Private
const updateGoals = asynHandler(async (req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` });
});

// @descrip Delete goals
// @route Put api/goals/:id
// @access Private
const deleteGoals = asynHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
