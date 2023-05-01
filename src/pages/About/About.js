import classes from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.square}></div>
      <div className={classes.square}></div>
      <div className={classes.square}></div>
      <div className={classes.square}></div>
      <div className={classes.square}></div>
      <div className={classes.square}></div>
      <div className={classes.square}></div>
      <div className={classes.square}></div>
      <div className={classes.square}></div>
      <div className={classes.square}></div>
      <div className={classes.text}>
        About Us
        <p>
          Our vision is to be the most trusted and respected education
          consultancy in Pokhara by offering honest and unbiased career guidance
          to our students.
        </p>
        <Link to="/contact">Contact us</Link>
      </div>
    </div>
  );
};

export default About;
