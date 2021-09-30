import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import MainScreen from "../../components/MainScreen";
import "./QueryScreen.css";
import axios from "axios";
import foodpacket from "../../images/foodpacket.png";

const QueryScreen = () => {
  const [restaurantName, setrestaurantName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [question, setquestion] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!question) {
      setMessage("Question field cannot be blank");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        setLoading(true);
        await axios.post(
          "./posts",
          {
            restaurantName,
            firstName,
            lastName,
            question,
            mobileNumber,
          },
          config
        );
        setLoading(false);
        alert("Query sent successfully");
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      }
    }
  };

  return (
    <MainScreen title="SUBMIT YOUR QUERY">
      <img src={foodpacket} alt="icon" height="300" />
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="restaurantName">
            <Form.Label>Restaurant Name</Form.Label>
            <Form.Control
              type="name"
              value={restaurantName}
              placeholder="Enter restaurant name"
              onChange={(e) => setrestaurantName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="name"
              value={firstName}
              placeholder="Enter first name"
              onChange={(e) => setfirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="name"
              value={lastName}
              placeholder="Enter last name"
              onChange={(e) => setlastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="question">
            <Form.Label>Question</Form.Label>
            <Form.Control
              type="text"
              value={question}
              placeholder="Enter question"
              onChange={(e) => setquestion(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="mobileNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              value={mobileNumber}
              placeholder="Enter Mobile Number"
              onChange={(e) => setmobileNumber(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Post my query
          </Button>
        </Form>
      </div>
    </MainScreen>
  );
};

export default QueryScreen;
