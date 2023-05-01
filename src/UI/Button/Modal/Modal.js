import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes.motto}>
      <div className={classes.mottoContent}>
        <h2 className={classes.mottoContentTitle}>
          {props.title}
          {/* A little progress each day adds up to big results. */}
        </h2>
        <p className={classes.mottoContentPara}>
          {props.description}
          {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. */}
        </p>
      </div>
    </div>
  );
};

export default Modal;
