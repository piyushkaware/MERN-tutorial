const asynHandler = require("express-async-handler");
// Instead of try catch we r using asynHandler

const Goal = require("../models/goalModel");

// @descrip Get goals
// @route GET /api/goals
// @access Private
const getGoals = asynHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json({ goals });
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
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json({ goal });
});

// @descrip Update goals
// @route Put api/goals/:id
// @access Private
const updateGoals = asynHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ updatedGoal });
});

// @descrip Delete goals
// @route Put api/goals/:id
// @access Private
const deleteGoals = asynHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.send(400);
    throw new Error("Goal not found");
  }

  await goal.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
