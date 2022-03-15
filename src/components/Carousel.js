import React from "react";
import { Carousel } from "react-responsive-carousel";

const Carousel1 = () => (
  <div>
  <Carousel interval={7000} transitionTime={2000} autoPlay={true} stopOnHover={false} infiniteLoop={true} showThumbs={false}>
    <div>
      <img alt="1" src={require("../images/home/Skyline.jpg")} />
      <p className="legend">The New York City skyline, as seen from Liberty State Park.</p>
    </div>
    <div>
      <img alt="2" src={require("../images/home/City.jpg")} />
      <p className="legend">Atlantic City features activites for all ages, including amusement park rides, beaches, and casinos.</p>
    </div>
    <div>
      <img alt="3" src={require("../images/home/Manor.jpg")} />
      <p className="legend">The Skylands Manor, one of the many highlights of the Ringwood Botanical Gardens.</p>
    </div>
  </Carousel>
  </div>
);

export default Carousel1