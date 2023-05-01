import classes from "./EventContent.module.css";

const EventContent = () => {
  return (
    <div className={classes.eventContent}>
      <div className={classes.event}>
        <h2 className={classes.eventTitle}>Industry connected</h2>
        <p lassName={classes.eventPara}>
          Our courses are co-designed with industry to align the curriculum with
          industry. Gain the practical skills needed to succeed in the
          workforce.
        </p>
      </div>
      <div className={classes.event}>
        <h2 className={classes.eventTitle}>
          Connect students to volunteer opportunities
        </h2>
        <p lassName={classes.eventPara}>
          Based on the level of your education you can earn respect and
          recognition in the society. You will get your future job and climb the
          career ladder depending on the knowledge that you get at school,
          college, university, etc.
        </p>
      </div>
    </div>
  );
};

export default EventContent;
