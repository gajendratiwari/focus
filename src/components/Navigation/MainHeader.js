import React, { useState } from "react";

import { NavLink, Link } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  // const [toggleMenu, setToggleMenu] = useState(true);

  // const toggleNav = () => {
  //   setToggleMenu(!toggleMenu);
  // };

  return (
    <header id="header" className={classes.header}>
      {/* <nav className={classes.headermainnav}>
        <input type="checkbox" />
        <div className={classes.headermainnavhamburger}>
          <div></div>
        </div>
        <div className={classes.headermainnavmenu}>
          <div>
            <div>
              <ul>
                <li>
                  <NavLink className={classes.items} to="/">
                    Welcome
                  </NavLink>
                </li>
                <li>
                  <NavLink className={classes.items} to="/aboutus">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className={classes.items} to="/services">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink className={classes.items} to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Logo and container */}

      <div className={classes.headerLogoContent}>
        <a href="#" className={classes.headerLogoContentLogo}>
          <span>Focus </span>IT <span> Education</span>
        </a>
        {/* content */}

        <div className={classes.headerContent}>
          <h1 className={classes.headerContentTitle}>
            Your Journey to Success Starts from Here!
          </h1>
          <p className={classes.headerContentPara}>
            We offer Computer and Accounting courses at short course
          </p>
          <Link className={classes.headerContentLink} to="/aboutus">
            Learn More
          </Link>
        </div>
      </div>

      {/* <div className={classes.logo}>Focus IT Education </div>
      <nav className={classes.nav}>
        {toggleMenu && (
          <ul className={classes.list}>
            <li>
              <NavLink className={classes.items} to="/">
                Welcome
              </NavLink>
            </li>
            <li>
              <NavLink className={classes.items} to="/aboutus">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={classes.items} to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className={classes.items} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        )}

        <button onClick={toggleNav} className={classes.btn}>
          BTN
        </button>
      </nav> */}
    </header>
  );
};

export default MainHeader;
