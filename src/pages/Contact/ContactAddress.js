import React from "react";
import classes from "./ContactAddress.module.css";
const ContactAddress = () => {
  return (
    <div className={classes.container}>
      <div className={classes.addressContent}>
        <div>
          <h2>Get in touch!</h2>
        </div>
        <div>
          Have a question? Concern? Request? We’d love to hear from you. Connect
          with us through the following ways.
        </div>

        <div className={classes.address}>
          <span> Phone: +977 985-6061728</span>
          <span>Email: focusit.edu@gmail.com </span>
          <span>
            Focus IT Education : Shishuwa Road, Lekhnath, Pokhara, Nepal{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
