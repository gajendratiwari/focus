import classes from "./HomeServiceDetail.module.css";
import { BsFillPeopleFill } from "react-icons/bs";

const HomeServiceDetails = () => {
  return (
    <div className={classes.homeServiceDetailsContent}>
      <h2 className={classes.homeServiceDetailsTitle}>What We Do </h2>
      <p className={classes.HomeServiceDetailsPara}>
        Focus IT Education offers different services to students, universities
        and agents respectively. We help students to bring their dream come true
        for higher studying in foreign universities. At the same time, we
        promote universities to connect with foreign students and provide them
        well-merited students to make international classrooms. We also train
        agents to help local students who seek higher education by providing
        transparent services.
      </p>
    </div>
  );
};

export default HomeServiceDetails;
