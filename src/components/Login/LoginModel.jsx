import React, { Component } from "react";
import img1 from '../../resources/images/logo-black.png';
class Login extends Component {
  render() {
    return (
      <div className="model" id="login">
        <div onClick={()=>this.props.history.goBack()} style={{width:`100%`,height:`100%`,position:`absolute`,top:0,left:0}} to="/"></div>
        <div className="modal-dialog" >
          <div className="login-content">
            <div className="login-image">
              <img src={img1} alt="Logo"/>
            </div>
            <h3>Hello!Sign into your account</h3>
            <form>
              <div className="form-group">
                <input type="email" placeholder="Enter email address" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Enter password" />
              </div>
              <div className="form-group form-checkbox">
                <input type="checkbox" /> Remember Me
                <a href="#">Forgot password?</a>
              </div>
            </form>
            <div className="form-btn">
              <a href="#" className="btn btn-orange">
                LOGIN
              </a>
              <p>
                Need an Account?<a href="#"> Create your Hotux account</a>
              </p>
            </div>
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="fab fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
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

export default Login;
