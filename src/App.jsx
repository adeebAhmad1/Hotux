import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./resources/css/App.css";
import "./resources/css/bootstrap.min.css";
import "./resources/css/default.css";
import "./resources/css/plugin.css";
import "./resources/css/style.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ position: `relative` }}>
          <Header path={Header} />
          <Route exact component={Home} path="/" />
          <Route component={Home} path="/home" />
          <Route component={About} path="/about" />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
