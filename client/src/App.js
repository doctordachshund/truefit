import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Goals from "./components/selections/Goals.js";
import Records from "./components/selections/Records.js";
import Workouts from "./components/selections/Workouts.js";
import Styles from "./components/selections/Styles.js";
import WorkoutGenerator from "./components/selections/WorkoutGenerator.js";
import TipOfTheDay from "./components/selections/TipOfTheDay.js";

import Landing from "./components/layout/Landing.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/Goals" component={Goals} />
            <Route exact path="/records" component={Records} />
            <Route exact path="/workouts" component={Workouts} />
            <Route exact path="/styles" component={Styles} />
            <Route
              exact
              path="/workoutgenerator"
              component={WorkoutGenerator}
            />
            <Route exact path="/tipoftheday" component={TipOfTheDay} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
