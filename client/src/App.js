import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import Restaurants from "./screens/Restaurants/Restaurants";
import Footer from "./components/Footer";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import QueryScreen from "./screens/QueryScreen/QueryScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/discovery" component={Restaurants} />
        <Route path="/query" component={QueryScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
