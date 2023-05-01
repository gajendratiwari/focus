import classes from "./EventData.module.css";

const EventDate = () => {
  return (
    <div className={classes.eventData}>
      <div className={classes.eventDataContent}>
        <h2 className={classes.eventDataContentTitle}>Events</h2>
      </div>
    </div>
  );
};

export default EventDate;
