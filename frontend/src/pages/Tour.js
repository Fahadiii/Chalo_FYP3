import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";

import pak_bg from "../img/pak_bg.jpg";
import niazi from "../img/niazi.jpg";
import findmyadventure from "../img/findmyadventure.jpg";
import airbnb from "../img/airbnb.jpg";
import bagpack from "../img/bagpack.jpg";

const Tour = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pak_bg} alt="" />
        <h1>Welcome to Niazi Express Transport services</h1>
        <h4>Let us tell you about it!</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                Founded in 1990, Niazi Bus Services is the largest provider of
                intercity and urban bus transportation, serving more than 100
                destinations with 1500 daily departures across Pakistan. It has
                become a Pakistan icon, providing safe, enjoyable and affordable
                travel to 54 million passengers each year. Niazi Express is well
                known for its regularly scheduled passenger service and it is
                playing an important role in delivering social inclusion,
                helping people in rural and urban areas for business, trade,
                career, service, education, training, health, shopping and
                leisure.
              </p>
            </div>
          </Col>
          <Col sm="4">
            <div className="tour-gallery">
              <a href={niazi}>
                <img src={niazi} alt="" />
              </a>
              <a href={airbnb}>
                <img src={airbnb} alt="" />
              </a>
              <a href={findmyadventure}>
                <img src={findmyadventure} alt="" />
              </a>
              <a href={bagpack}>
                <img src={bagpack} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
    <section className="reviews">
      <Container>
        <section className="tour-msg text-center">
          <h1>Reviews and Suggestions</h1>
          <p>We're glad to hear something from you.</p>
          <form action="">
            <Row>
              <Col sm="6">
                <input
                  type="text"
                  name="Name"
                  id="reviewer-name"
                  placeholder="Your Name"
                  required
                />
                <br />
                <input
                  type="email"
                  name="Email"
                  id="reviewer-email"
                  placeholder="Your email"
                  required
                />
              </Col>
              <Col>
                <textarea
                  name="Message"
                  id="reviewer-message"
                  rows="4"
                  placeholder="Your Message"
                />
              </Col>
            </Row>
            <Button outline color="secondary" className="float-right">
              Submit
            </Button>
          </form>
        </section>
      </Container>
    </section>
  </div>
);

export default Tour;
