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
import Services from "./components/Services/Services";

const loader = document.querySelector('#preloader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.style.display = "block";

const hideLoader = () => loader.style.display = "none";
class App extends Component {
  componentDidMount() {
    hideLoader();
  }
  render() {
    return (
      <BrowserRouter>
        <div style={{ position: `relative` }}>
          <Header path={Header} />
          <Route exact component={Home} path="/" />
          <Route component={Home} path="/home" />
          <Route component={About} path="/about" />
          <Route component={Services} path="/services" />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
