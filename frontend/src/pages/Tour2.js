import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
// import tours from "../components/Package";

const Tour = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>THIS IS TOUR 2 PAGE</p>
              <p>
                Morbi facilisis, odio vitae egestas pretium, mauris tortor
                vulputate dolor, non interdum nunc tellus at dolor. Donec
                condimentum et augue vitae volutpat. Fusce vitae laoreet sem.
                Integer a justo sit amet nibh vehicula blandit. Suspendisse
                faucibus venenatis egestas. In vulputate sapien sit amet ligula
                vulputate, in consequat ex molestie. Curabitur hendrerit
                pulvinar vehicula. Phasellus quis posuere tortor. Cras
                pellentesque vehicula dui nec fermentum. Sed venenatis nunc
                justo. Quisque metus est, volutpat quis scelerisque in,
                fermentum sed lacus. Sed sed pretium massa. Aenean imperdiet
                molestie turpis at egestas.
              </p>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  </div>
);

export default Tour;
