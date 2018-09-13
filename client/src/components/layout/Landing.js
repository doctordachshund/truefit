import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="landing1">
        <Link to="/goals" className="items">
          Goals
        </Link>
        <Link to="/records" className="items">
          Records
        </Link>
        <Link to="/workouts" className="items">
          Workouts
        </Link>
        <Link to="/styles" className="items">
          Styles
        </Link>
        <Link to="workoutgenerator" className="items">
          Workout-Generator
        </Link>
        <Link to="/tipoftheday" className="items">
          Tip Of The Day
        </Link>
      </div>
    );
  }
}

export default Landing;
