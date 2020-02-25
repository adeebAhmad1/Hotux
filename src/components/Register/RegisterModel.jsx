import React, { Component } from "react";
import logo from "../../resources/images/logo-black.png"
class RegisterModel extends Component {
  render() {
    return (
      <div className="model" id="register">
        <div onClick={()=>this.props.history.goBack()} style={{width:`100%`,height:`100%`,position:`absolute`,top:0,left:0}} to="/"></div>
        <div className="modal-dialog">
          <div className="login-content">
            <div className="login-image">
              <img src={logo} alt="Logo" />
            </div>
            <h3>Awesome! Create a Hotux Account</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Enter username" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Enter email address" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Enter password" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Confirm password" />
              </div>
            </form>
            <div className="form-btn">
              <a href="#" className="btn btn-orange">
                SIGN UP
              </a>
            </div>
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="fab fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-bed fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterModel;
