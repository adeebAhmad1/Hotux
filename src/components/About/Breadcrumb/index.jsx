import React from "react";

const Breadcrumb = () => {
  return (
    <section className="breadcrumb-outer">
      <div className="container">
        <div className="breadcrumb-content">
          <h2>About us 1</h2>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Hotux</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About us
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
