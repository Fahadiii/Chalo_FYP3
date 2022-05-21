import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";

import niazi from "../img/niazi.jpg";
import findmyadventure from "../img/findmyadventure.jpg";
import airbnb from "../img/airbnb.jpg";
import bagpack from "../img/bagpack.jpg";
const tours = [
  {
    id: 1,
    category: ["resort", "honeymoon"],
    img: niazi,
    alt: "blah blah",
    title: "Niazi Travels",
    subtitle: "Best Travels",
    ref: "Tour",
  },
  {
    id: 2,
    category: ["beach", "mountain"],
    img: findmyadventure,
    alt: "blah blah",
    title: "FindMyAdventure",
    subtitle: "Good Packages",
    ref: "Tour2",
  },
  {
    id: 3,
    category: ["resort", "honeymoon"],
    img: airbnb,
    alt: "blah blah",
    title: "The BackPackers",
    subtitle: "Pack Your Bags",
    ref: "Tour2",
  },
  {
    id: 4,
    category: ["climbing", "mountain"],
    img: bagpack,
    alt: "blah blah",
    title: "AirBnb",
    subtitle: "Azaming homes",
    ref: "Tour",
  },
];

const itemCategories = [
  "all",
  "beach",
  "mountain",
  "resort",
  "climbing",
  "camping",
  "honeymoon",
];

class Package extends Component {
  state = {
    cards: [],
    category: "all",
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Top Tour Guides</h1>
            <p>A Great Collection of Our Tour Packages</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map((tourcard) => {
                      return tourcard.category.map((catItem) => {
                        return catItem === category ? (
                          <TourCard key={tourcard.id} tourcard={tourcard} />
                        ) : null;
                      });
                    })
                  : cards.map((tourcard) => (
                      <TourCard key={tourcard.id} tourcard={tourcard} />
                    ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
