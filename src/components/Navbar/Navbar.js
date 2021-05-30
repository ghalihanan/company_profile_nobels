import React from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  console.log(location, "  <<< useLocation");
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h2> NOBELS</h2>
        </div>
        <div className="menu">
          <ul>
            {/* ini pake Link */}
            <Link to="/Homepage">
              <li>Home</li>
            </Link>

            <Link to="/">
              <li>Service</li>
            </Link>

            <Link to="/">
            <li>Products</li>
            </Link>

            <Link to="/about">
              <li>About</li>
            </Link>

          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
