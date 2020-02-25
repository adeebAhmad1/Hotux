import React from 'react';
import Breadcrumb from './Breadcrumb';
import Info from './Info';
import Hotel from './Hotel';
import Team from './Team';
import Services from '../Home/Services';
import Awards from './Awards';
import LoginModel from "../Login/LoginModel"
import RegisterModel from "../Register/RegisterModel"
const About = () => {
  return (
    <div>
      <Breadcrumb/>
      <Info/>
      <Hotel/>
      <Team/>
      <Services/>
      <Awards/>
      <LoginModel history={this.props.history}/>
      <RegisterModel history={this.props.history}/>
    </div>
  );
};

export default About;