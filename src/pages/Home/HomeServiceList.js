import classes from "./HomeServiceList.module.css";
import Services from "../../asset/data";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const HomeServiseList = (props) => {
  const params = useParams();

  return (
    <div id="service-content" className={classes.serviceContent}>
      {Services.map((serviceList) => {
        return (
          <div key={serviceList.id} className={classes.serviceList}>
            <h2 className={classes.serviceListTitle}>{serviceList.title}</h2>
            <p className={classes.serviceListPara}>{serviceList.description}</p>

            <Link
              to={`/services/${serviceList.id}`}
              className={classes.serviceListLink}
            >
              Read More
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default HomeServiseList;
