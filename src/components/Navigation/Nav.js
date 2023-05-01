import classes from "./MainHeader.module.css";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  // const [hideNav, setHidenav] = useState(true);

  // const hideNavhandler = () => {
  //   setHidenav(false);
  //   return hideNav;
  // };

  function myFunction() {
    var x = document.getElementById("myDIV");

    x.style.display = "none";
  }
  return (
    <div>
      <nav className={classes.headermainnav}>
        <input type="checkbox" />
        <div className={classes.headermainnavhamburger}>
          <div></div>
        </div>

        <div id="myDIV" className={classes.headermainnavmenu}>
          <div>
            <div>
              <ul onClick="myFunction()">
                <li>
                  <NavLink className={classes.items} to="/">
                    Welcome
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink className={classes.items} to="/aboutus">
                    About
                  </NavLink>
                </li> */}
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
      </nav>
    </div>
  );
};
export default Nav;
