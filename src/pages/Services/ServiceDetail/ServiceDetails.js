import classes from "./ServiceDetails.module.css";
import pht from "../../../asset/Images/website.jpeg";
import { useParams, NavLink } from "react-router-dom";
import NotFound from "../../NotFound";
import Services from "../../../asset/data";

const DUMMY_DATA = [
  {
    id: "1",
    title: "Learning a little each day adds up.",
    paragraph: "Phasellus ac leo eget felis egestas vestibulum nec at velit.",
  },
  {
    id: "2",
    title: "Research shows that students who make learning",
    paragraph: "Phasellus ac leo eget felis egestas vestibulum nec at velit.",
  },
  {
    id: "3",
    title: "Set time aside to learn and get reminders using your",
    paragraph: "Phasellus ac leo eget felis egestas vestibulum nec at velit.",
  },
];

const WebDesign = () => {
  const params = useParams();
  const serviceItem = Services.find(
    (service) => service.id === params.serviceId
  );

  console.log(Services.title);

  if (!serviceItem) {
    return (
      <NavLink>
        <NotFound />
      </NavLink>
    );
  }
  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <div className={classes.pageitem}>
          <div className={classes.slider}>
            <figure>
              <img src={pht} alt />
              <img src="http://lorempixel.com/g/680/300/nature/1" alt />
              <img src="http://lorempixel.com/g/680/300/city/1" alt />
              <img src="http://lorempixel.com/g/680/300/people/1" alt />
            </figure>
          </div>
        </div>
      </div>

      <div className={classes.section}>
        <div className={classes.pageitem}>
          <div className={classes.col}>
            <h2>{serviceItem.title}</h2>
            <p>{serviceItem.description}</p>
          </div>
          <div className={classes.col}>
            <h2>{serviceItem.title}</h2>
            <p>{serviceItem.description}</p>
          </div>
        </div>
      </div>

      {/* <div className={classes.section}>
        <div className={classes.pageitem}>
          <h2>{serviceItem.title}</h2>
          <p>{serviceItem.paragraph}</p>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Vivamus pulvinar metus vel neque sagittis, at
            pharetra tellus tincidunt. Sed semper euismod ipsum, feugiat
            consequat nisi eleifend et. Duis volutpat gravida efficitur. Nulla
            iaculis blandit semper. Maecenas eget aliquet libero. Donec sit amet
            sagittis erat. Sed elementum felis id interdum cursus. Phasellus ac
            urna feugiat, placerat massa et, vestibulum odio. Aenean eu nisl
            lobortis, tincidunt ligula rhoncus, convallis mi.
          </p>
        </div>
      </div> */}

      {/* <div className={classes.section}>
        <div className={classes.pageitem}>
          <div className={classes.col}>
            <h2>Phasellus Ac Leo Eget</h2>
            <p>
              Vivamus venenatis, nibh ut tempus viverra, tellus augue pulvinar
              sapien, at iaculis justo nisi non metus. Quisque quis malesuada
              arcu, sed ultricies nibh. Duis vehicula metus quis arcu rutrum
              faucibus eget ut ex. Curabitur lacus justo, iaculis congue
              suscipit quis, posuere at turpis.{" "}
            </p>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Donec in quam non urna volutpat
              consequat. Proin mollis ut mauris et venenatis. Vivamus dui nibh,
              blandit vitae pellentesque sed, finibus sit amet nulla.
            </p>
          </div>
          <div className={classes.col}>
            <h2>Etiam Imperdiet Elit</h2>
            <p>
              Nunc rhoncus convallis ex, eget viverra ex pulvinar non.
              Suspendisse enim ligula, varius sed rutrum id, bibendum vitae
              lectus. Mauris mollis pellentesque diam et congue. Praesent
              dignissim semper facilisis. Duis gravida, elit nec iaculis
              efficitur, sem orci commodo lectus, id cursus sem diam in eros.{" "}
            </p>
            <p>
              Maecenas porta mi sed diam condimentum gravida. Nam a ligula
              consectetur, imperdiet lacus nec, rutrum dui. Sed aliquam at magna
              non mollis. Duis fermentum purus eget nisi dictum, vitae bibendum
              nulla cursus.
            </p>
          </div>
          <div className={classes.col}>
            <h2>Morbi Bibendum</h2>
            <p>
              Donec ut faucibus erat, vel efficitur enim. Fusce sit amet ligula
              eu libero lacinia condimentum sed in turpis. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Vivamus pulvinar metus vel neque sagittis, at pharetra tellus
              tincidunt. Sed semper euismod ipsum, feugiat consequat nisi
              eleifend et. Duis volutpat gravida efficitur. Nulla iaculis
              blandit semper. Maecenas eget aliquet libero. Donec sit amet
              sagittis erat. Sed elementum felis id interdum cursus. Phasellus
              ac urna feugiat, placerat massa et, vestibulum odio. Aenean eu
              nisl lobortis, tincidunt ligula rhoncus, convallis mi.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default WebDesign;
