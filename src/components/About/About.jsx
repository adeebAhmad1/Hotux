import React, { Component } from "react";
import Breadcrumb from "../utils/Breadcrumb";
import Info from "./Info";
import Hotel from "./Hotel";
import Team from "./Team";
import Facilities from "../Services/Facilities";
import Awards from "./Awards";
import LoginModel from "../Login/LoginModel";
import RegisterModel from "../Register/RegisterModel";
class About extends Component {
  componentDidMount(){
    document.title = " About | Hotux"
  }
  render() {
    return (
      <div>
        <Breadcrumb page="About Us" />
        <Info />
        <Hotel />
        <Team />
        <Awards />
        <Facilities />
        <LoginModel history={this.props.history} />
        <RegisterModel history={this.props.history} />
      </div>
    );
  }
}

export default About;
