import React from 'react';
import Swiper from "./Swiper"
import About from './About';
import Rooms from './Rooms';
import Discover from './Discover';
import Services from './Services';
import News from './News';
import Newsletter from './News/Newsletter';
import Reviews from './Reviews';
const Home = () => {
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
    </div>
  );
};

export default Home;