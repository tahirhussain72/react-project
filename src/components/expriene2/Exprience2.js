import React from "react";
import { images } from "../../data/assets";
import { BsFillPlayFill } from "react-icons/bs";
import "./exprience2.css";
const Exprience2 = () => {
  return (
    <div className="exprience2">
      <div className="row main-exprience">
        <div className="col-md-12 exp-img'">
          <div className="exp-img">
            <img src={images.member4} alt="" />
          </div>
          <div className="overlay-text">
            <h4>See how we work with touch of experience</h4>
            <div className="play-btnn">
            < BsFillPlayFill/>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Exprience2;
