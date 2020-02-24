import React, { Component } from "react";
import img1 from "../../../resources/images/room1.jpg";
import img2 from "../../../resources/images/room2.jpg";
import img3 from "../../../resources/images/room3.jpg";
import { Link } from "react-router-dom"
class Rooms extends Component {
  state = {
    titles: ["SUPER DELUXE", "JUNIOR SUITE", "EXECUTIVE SUITE"],
    images: [img1, img2, img3]
  };
  showCards = () => {
    return this.state.titles.map((el, i) => (
      <div className="col-md-4 col-sm-6 col-xs-6" key={i}>
        <div className="room-item">
          <div className="room-image">
            <img src={this.state.images[i]} alt="image" />
          </div>
          <div className="room-content">
            <div className="room-title">
              <h4>{el}</h4>
              <p>$1200/Night</p>
              <div className="deal-rating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
            </div>
            <div className="room-services mar-bottom-15">
              <ul>
                <li>
                  <i className="fa fa-bed" aria-hidden="true"></i> 3 Bedrooms
                </li>
                <li>
                  <i className="fa fa-wifi" aria-hidden="true"></i> Wifi
                </li>
              </ul>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum orci nulla, fermentum in faucibus a, interdum eu nibh.
            </p>
            <div className="room-btns mar-top-20">
              <Link
                to={`/room/details/${el
                  .split(" ")
                  .join("_")
                  .toLowerCase()}`}
                className="btn btn-black mar-right-10"
              >
                VIEW DETAILS
              </Link>
              <Link to="/booking" className="btn btn-orange">
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));
  };
  render() {
    return (
      <section className="rooms">
        <div className="container">
          <div className="section-title">
            <h2>
              Explore <span>Rooms</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex
              neque, sodales accumsan sapien et, auctor vulputate quam donec
              vitae consectetur turpis
            </p>
          </div>
          <div className="room-outer">
            <div className="row">
              {this.showCards()}
            </div>
          </div>
          <div className="section-btn">
            <Link to="/rooms" className="btn btn-black mar-right-10">
              EXPLORE ALL ROOMS <i className="fas fa-angle-double-right"></i>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Rooms;
