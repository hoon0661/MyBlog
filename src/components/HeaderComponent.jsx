import React, { Component } from "react";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HeaderComponent extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand" href="http://www.google.com">
          <FontAwesomeIcon icon={faHome} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/aboutme">
              About Me
            </Link>
            <Link className="nav-item nav-link" to="/software">
              Software
            </Link>
            <Link className="nav-item nav-link" to="/hardware">
              Hardware
            </Link>
          </div>
          <div className="navbar-nav collapse navbar-collapse justify-content-end">
            <Link className="nav-item nav-link" to="/login">
              Login
            </Link>
            <a
              className="navbar-brand"
              href="https://www.linkedin.com/in/hoon0661/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="navbar-brand"
              href="https://github.com/hoon0661/hoonRepository"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderComponent;
