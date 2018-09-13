import React, { Component } from "react";
import "./WorkoutGenerator.css";

class WorkoutGenerator extends Component {
  constructor() {
    super();
    this.state = {
      workouts: []
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();

    fetch("https://wger.de/api/v2/exerciseinfo")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let workouts = data.results.map(workout => {
          return (
            <div key={workout.results}>
              <div>
                {workout.category.name} ~ <br />
                <div>
                  <img src={workout.image} alt="workout" />
                </div>
                {workout.description}
                <br />
                <br />
              </div>
            </div>
          );
        });
        this.setState({ workouts: workouts });
      });
  }

  render() {
    return (
      <div className="container">
        <button
          onClick={this.onClick}
          disabled={false}
          type="button"
          class="btn btn-primary btn-block mt-2"
        >
          Click here to generate a workout!
        </button>
        <div>{this.state.workouts}</div>
      </div>
    );
  }
}

export default WorkoutGenerator;
