import React, { Component } from "react";
import "./WorkoutGenerator.css";

class WorkoutGenerator extends Component {
  constructor() {
    super();
    this.state = {
      workouts: []
    };
  }

  componentWillMount() {
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
        <div>{this.state.workouts}</div>
      </div>
    );
  }
}

// client ID 396585067535-6ebd5677lijdukog770935tfr2v89ib9.apps.googleusercontent.com
// client secret 9ECpzbyEkH5EIkMSJv9dS6fS

export default WorkoutGenerator;
