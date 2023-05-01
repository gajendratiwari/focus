import { Link } from "react-router-dom";
import classes from "./Services.module.css";
import HomeServiseList from "../Home/HomeServiceList";
import Modal from "../../UI/Button/Modal/Modal";
import ContactForm from "../Contact/ContactForm";

const Services = () => {
  return (
    <div>
      <section>
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
              consultancy in Pokhara by offering honest and unbiased career
              guidance to our students.
            </p>
            <Link to="/contact">Contact us</Link>
          </div>
        </div>
      </section>
      <Modal title="Services" description="Your Success Begins With Us" />
      <HomeServiseList />
      <div className={classes.contactFormAdjust}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Services;
