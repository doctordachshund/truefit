const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

// Routes
const workouts = require("./routes/workoutPosts");

// Express app setup
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Routes
app.use("/routes/workoutPosts", workouts);

module.exports = app;
