import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./video.css";
import { images } from "../../data/assets";
import { BsFillPlayFill } from "react-icons/bs";

const Video = () => {
  
  return (
    <div className="video">

        <div className="col-md-12">
          <h3>WELCOME</h3>
        </div>
      <div className="row ">
        <div className="col-md-6 leftSide">
          <h1 className="heading">
            WELLCOME Largest Demand Partnership Buidling Financial Experts
          </h1>
          <p className="paragraph">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
            <span className="colorChange">A wonderful serenity</span> has taken
            possession of my entire soul, like these sweet mornings of spring
            which.
            <br />
            <br />
            like these sweet mornings of spring which I enjoy with my whole
            heart.A wonderful serenity has taken possession of my entire soul,
            like these sweet
          </p>

          <h6 className="Phone">
            Call to ask any question{" "}
            <span className="para">540-325-1523 or 540-328-1265</span>
          </h6>
          <img className="sign" src={images.sig} alt="" />
        </div>
        <div className="col-md-6 play">
              <img className="image" src={images.video} alt="" />
              <div className="play-btn">
                <BsFillPlayFill />
              </div>
              <div className="bottom-img">
              <img src={images.rectangle} alt="" />
            </div>
            <div className="side-img">
              <img src={images.group43} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
