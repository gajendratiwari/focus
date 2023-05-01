import classes from "./Contact.module.css";
import ContactAddress from "./ContactAddress";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className={classes.container}>
      <div className={classes.contactContainerHeader}>
        <div className={classes.card}>Contact Us Today</div>
      </div>
      <ContactAddress />
      <ContactForm />
    </div>
  );
};

export default Contact;
