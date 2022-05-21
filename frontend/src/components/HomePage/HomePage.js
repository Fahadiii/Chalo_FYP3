import React, { Component } from "react";
import "./HomePageStyles.css";

import Hero from "../Hero";
import table1 from "../table/table1";

import Package from "./../Package";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  render() {
    return (
      <div className="container">
        <table1 />
        <Hero />

        <Package />

        <br></br>
      </div>
    );
  }
}

export default HomePage;
