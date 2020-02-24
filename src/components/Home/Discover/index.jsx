import React, { Component } from "react";

class Discover extends Component {
  render() {
    return (
      <section class="call-to-action">
        <div class="container-fluid">
          <div class="row display-flex">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="call-content pad-left-30">
                <h2 class="white mar-bottom-25">
                  Discover a brand <span>luxurious</span> hotel
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  porttitor, eros nec porttitor viverra, felis libero luctus
                  nisi, non volutpat purus felis ut erat ipsum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  porttitor, eros nec porttitor viverra, felis libero luctus
                  nisi, non volutpat purus felis ut erat ipsum.
                </p>
                <a href="#" class="btn btn-orange mar-top-20">
                  READ MORE <i class="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="video-figure"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Discover;
