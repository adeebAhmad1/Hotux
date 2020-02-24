import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./resources/css/App.css";
import "./resources/css/bootstrap.min.css";
import "./resources/css/default.css";
import "./resources/css/plugin.css";
import "./resources/css/style.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Route exact component={Home} path="/"/>
        <Route exact component={Home} path="/home"/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
