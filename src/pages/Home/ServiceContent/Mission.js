import classes from "./Mission.module.css";
import MissionImg from "../../../asset/img/Gallery/mission.jpg";

const Mission = () => {
  return (
    <div className={classes.bookingDate}>
      <div className={classes.bookingContent}>
        <h2>Our Mission</h2>
        <p>
          Create opportunity for the students to build up their career by
          achieving the high quality of education.
        </p>
      </div>
      <div className={classes.missionImg}>
        <img src={MissionImg}></img>
      </div>
    </div>
  );
};

export default Mission;
