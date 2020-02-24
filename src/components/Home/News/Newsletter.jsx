import React from "react";

const Newsletter = () => {
  return (
    <section class="newsletter">
      <div class="container">
        <div class="section-title title-white">
          <h2>
            Subscribe to our <span>Newsletter</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex
            neque, sodales accumsan sapien et, auctor vulputate quam donec vitae
            consectetur turpis
          </p>
        </div>
        <div class="newsletter-form">
          <form>
            <input type="email" placeholder="Enter your email" />
            <a href="#" class="btn btn-orange">
              SIGN UP
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
