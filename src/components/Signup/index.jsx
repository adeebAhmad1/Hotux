import React, { Component } from "react";
import Breadcrumb from "../utils/Breadcrumb";
import logo from "../../resources/images/logo-black.png";
import { Link } from "react-router-dom";
import firebase,{db} from "../../config/firebase"
class Signup extends Component {
  state={
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((doc)=>{
      db.collection("userData")
          .add({
            id: doc.user.uid,
            username: this.state.username,
            role: 0
          })
          .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            this.props.history.push("/login");
          })
          .catch(error => {
            console.error("Error adding document: ", error);
          });
    }).catch((error) => {
      console.log(error)
    });
  }
  handleChange = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    return (
      <div>
        <Breadcrumb page="Sign Up" />
        <section className="login">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="login-image text-center">
                  <img src={logo} alt="LOGO" />
                  <p className="mar-top-10">Conscientious & Professional</p>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{ position: `relative`, height: `60vh` }}
            >
              <div
                className="col-md-6 col-sm-6 col-xs-12"
                style={{
                  position: `absolute`,
                  top: `50%`,
                  left: `50%`,
                  transform: `translate(-50%,-50%)`
                }}
              >
                <div className="login-content pad-0">
                  <h3>Create a Hotux Account</h3>
                  <form action="/" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <input name="username" type="text" onChange={this.handleChange} value={this.state.username} placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                      <input name="email" type="email" onChange={this.handleChange} value={this.state.email} placeholder="Enter email address" />
                    </div>
                    <div className="form-group">
                      <input name="password" type="password" onChange={this.handleChange} value={this.state.password} placeholder="Enter password" />
                    </div>
                    <div className="form-group">
                      <input name="confirmPassword" type="password" onChange={this.handleChange} value={this.state.confirmPassword} placeholder="Confirm password" />
                    </div>
                    <div className="form-btn">
                      <button className="btn btn-orange">SIGN UP</button>
                    </div>
                  </form>
                  <ul className="social-links">
                    <li>
                      <Link to="/">
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-google" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Signup;
