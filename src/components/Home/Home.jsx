import Swiper from "./Swiper"
import Regarding from './Regarding';
import Rooms from './Rooms';
import Discover from './Discover';
import Facilities from '../Services/Facilities';
import News from './News';
import Newsletter from './News/Newsletter';
import Reviews from './Reviews';
import React, { Component } from 'react';
import LoginModel from "../Login/LoginModel";
import SignupModel from "../Signup/SignupModel";

class Home extends Component {
  componentDidMount(){
    document.title = "Home | Hotux"
  }
  render() {
    return (
      <div>
      <Swiper/>
      <Regarding/>
      <Rooms/>
      <Discover/>
      <Facilities/>
      <Reviews/>
      <News/>
      <Newsletter/>
      <LoginModel  history={this.props.history}/>
      <SignupModel history={this.props.history}/>
    </div>
    );
  }
}

export default Home;