import classes from "./Home.module.css";

import HomeServiseList from "./HomeServiceList";
import Modal from "../../UI/Button/Modal/Modal";
import EventContent from "../Event/EventContent";

import FeatureText from "../Features/FeatureText";
import Testimonials from "../Testimonials/Testimonials";
import MainHeader from "../../components/Navigation/MainHeader";

import EventData from "../Event/EventData";

import FeatureContent from "../Features/FeatureContent";
import HomeServiceDetails from "./ServiceContent/HomeServiceDetail";
import Mission from "./ServiceContent/Mission";

const Home = () => {
  return (
    <div className={classes.container}>
      <MainHeader />
      <HomeServiceDetails />
      <Mission />
      <Modal
        title="Our Services"
        description="Take a look at some of our recent services to see what services we provide."
      />
      <HomeServiseList />

      <EventContent />
      <EventData />
      <Modal
        title="Testimonials"
        description="“Learner stories from Focus IT Education.”"
      />
      {/* <FeatureContent />
      <FeatureText /> */}
      <Testimonials />
    </div>
  );
};

export default Home;
