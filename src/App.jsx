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
import Rooms from "./components/RoomGrid/Room";
import RoomsContextProvider from "./context/RoomsContext";
import Forgot from "./components/Forgot";
import Details from "./components/RoomDetails/Details"
import Login from "./components/Login";
import Signup from "./components/Signup";
class App extends Component {
  render() {
    document.title = "Hotux | Forgot Password"
    return (
      <RoomsContextProvider>
        <BrowserRouter>
          <div style={{ position: `relative` }}>
            <Header path={Header} />
            <Route exact component={Home} path="/" />
            <Route component={Home} path="/home" />
            <Route component={About} path="/about" />
            <Route component={Services} path="/services" />
            <Route exact component={Rooms} path="/rooms" />
            <Route component={Forgot} path="/forgot" />
            <Route component={Login} path="/login" />
            <Route component={Signup} path="/signup" />
            <Route component={Details} path="/rooms/:roomId" />
            <Footer />
          </div>
        </BrowserRouter>
      </RoomsContextProvider>
    );
  }
}

export default App;
