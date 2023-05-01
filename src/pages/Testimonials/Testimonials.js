import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./Testominial.module.css";
import data from "../../asset/data.json";
import img from "../../asset/img/Testimonials/testimonials-1.jpg";

const Testimonials = () => {
  return (
    <div className={classes.testominialContent}>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        {data.map((content) =>
          content.testmonials.testmonial.map((data) => {
            return (
              <div key={data.id} className={classes.myCarousel}>
                <div>
                  <img className={classes.img} src={data.img} />
                  <div className={classes.testominialCardFront}>
                    <h3 className={classes.h3}> {data.name}</h3>
                    <h4 className={classes.h4}>Designer</h4>
                  </div>
                  <div className={classes.testominialCardBack}>
                    <p className={classes.p}>{data.comment}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </Carousel>
    </div>
  );
};

export default Testimonials;

{
  /* import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./Testominial.module.css";

const Testimonials = () => {
  return (
    <div className={classes.testominialContent}>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="../../../src/asset/img/Testimonials/testimonials-1.jpg" />
          <div className={classes.myCarousel}>
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src="/images/daniel.png" />
          <div className={classes.myCarousel}>
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/theo.png" />
          <div className={classes.myCarousel}>
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials; */
}
