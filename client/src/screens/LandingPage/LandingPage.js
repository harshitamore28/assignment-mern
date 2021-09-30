import food from "../../images/food.png";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import React from "react";

import { Button, Container, Row } from "react-bootstrap";

function LandingPage() {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <img src={food} alt="icon" height="250 " width="750" />
              <h1 className="title">Welcome to the Food Discovery Platform!</h1>
              <p className="subtitle">
                Please click on{" "}
                <div className="d-grid gap-2">
                  <Link to="/discovery">
                    <Button variant="primary" size="lg">
                      Discover Food Joints
                    </Button>
                  </Link>
                </div>{" "}
                to begin the food hunt!
              </p>
            </div>

            <div className="buttonContainer">
              <Link to="/login">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
