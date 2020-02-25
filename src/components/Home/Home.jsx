import Swiper from "./Swiper"
import About from './About';
import Rooms from './Rooms';
import Discover from './Discover';
import Services from './Services';
import News from './News';
import Newsletter from './News/Newsletter';
import Reviews from './Reviews';
import React, { Component } from 'react';
import LoginModel from "../Login/LoginModel";
import RegisterModel from "../Register/RegisterModel";

class Home extends Component {
  render() {
    return (
      <div>
      <Swiper/>
      <About/>
      <Rooms/>
      <Discover/>
      <Services/>
      <Reviews/>
      <News/>
      <Newsletter/>
      <LoginModel  history={this.props.history}/>
      <RegisterModel history={this.props.history}/>
    </div>
    );
  }
}

export default Home;