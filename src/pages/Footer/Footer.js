import classes from "./Footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className={classes.footerContent}>
      <p> All right Reserved. &copy; Focus</p>
      <div className={classes.footerSocial}>
        <a href="#" className={classes.footerSocialLink}>
          <i>
            <BsFacebook />
          </i>
        </a>
        <a href="#" className={classes.footerSocialLink}>
          <i>
            <BsLinkedin />
          </i>
        </a>
        <a href="#" className={classes.footerSocialLink}>
          <i>
            <FaTwitter />
          </i>
        </a>
        <a href="#" className={classes.footerSocialLink}>
          <i>
            <BsInstagram />
          </i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
