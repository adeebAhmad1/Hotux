import React, { Component } from "react";
import img1 from "../../../resources/images/service1.jpg";
import img2 from "../../../resources/images/service2.jpg";
import img3 from "../../../resources/images/service3.jpg";
import { Link } from "react-router-dom"
class Services extends Component {
  render() {
    return (
      <section class="services">
        <div class="container">
          <div class="section-title">
            <h2>
              Explore <span>Services</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex
              neque, sodales accumsan sapien et, auctor vulputate quam donec
              vitae consectetur turpis
            </p>
          </div>
          <div class="service-outer">
            <div class="row">
              <div class="col-md-4 col-sm-12 col-xs-12">
                <div class="service-item">
                  <div class="service-image">
                    <img src={img1} alt="Imae" />
                  </div>
                  <div class="service-content">
                    <h4>
                      <Link to="/restaurant">Restaurant</Link>
                    </h4>
                    <p>Breakfast and Dinner</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-6">
                <div class="service-item">
                  <div class="service-image">
                    <img src={img2} alt="Imag" />
                  </div>
                  <div class="service-content">
                    <h4>
                      <Link to="/services">Massage</Link>
                    </h4>
                    <p>Opens Daily</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-6">
                <div class="service-item">
                  <div class="service-image">
                    <img src={img3} alt="Iage" />
                  </div>
                  <div class="service-content">
                    <h4>
                      <Link to="/services">Conference Room</Link>
                    </h4>
                    <p>Air Conditioning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
