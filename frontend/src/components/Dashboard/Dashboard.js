import React, { Component } from "react";
import "./DashboardStyles.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
    };
  }

  render() {
    return (
      <div className="q">
        <div className="container">
          <div className="container text-left">
            <br></br>
            <br></br>
            <h1 className="d">About Us</h1>
            <br></br>

            <p>Doing this Project for FYP</p>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
