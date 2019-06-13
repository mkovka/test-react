import React from "react";
import "./navbar.scss";
import logo from "./logo-blue.png";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="menu-container">
        <div>
          <img src={logo} />
        </div>
        <div>
          <p>About Us</p>
          <p>Login</p>
          <p>Sign Up</p>
          <button><a href="https://google.com">Free trail</a></button>
        </div>
      </div>
    );
  }
}
