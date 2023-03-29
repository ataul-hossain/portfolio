import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-div h-div">
      <div className="h-container">
        <div className="header-wrapper">
          <div className="h-left">
            <h2>Ataul Hossain</h2>
          </div>
          <div className="h-right">
            <Link className="link h-items">
              <p>Intro</p>
            </Link>
            <Link className="link h-items">
              <p>Skills</p>
            </Link>
            {/* <Link className="link h-items">
              <p>Experience</p>
            </Link> */}
            <Link className="link h-items">
              <p>Portfolio</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
