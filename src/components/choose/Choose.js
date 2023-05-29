import React from "react";
import { settingIcon } from "../../data/constant/menuItem";
import { leaderIcon } from "../../data/constant/menuItem";

import "./choosw.css";
import { images } from "../../data/assets";

const Choose = () => {
  return (
    <div className="choose">
      <h3 className="choose-heading">WHY CHOOSE US</h3>
      <div className="row">
        <div className="col-md-6">
          <h1 className="why-heading">
            There Are Many Companies But Why Choose Us
          </h1>
          <p className="why-para">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.A
            wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which.A wonderful serenity has taken
            possession of my entire soul
          </p>
          <div className="">
            {settingIcon.map((item, i) => (
              <div key={i}>
                <span className="setting-icon">{item.icon}</span>
                <h4 className="setting-heading">{item.text}</h4>
                <p className="setting-para">{item.para}</p>
              </div>
            ))}
          </div>
          <div className="">
            {leaderIcon.map((item, i) => (
              <div key={i}>
                <span className="setting-icon">{item.icon}</span>
                <h4 className="setting-heading">{item.text}</h4>
                <p className="setting-para">{item.para}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6 why-img">
          <img src={images.why} alt="" />
          <div>
          {/* <div className="doted">
          <img src={images.group56}alt="" />
          </div> */}
            <img className="rectangle" src={images.rectangle} alt="" />
          </div>
          <div>
            <img className="half-circle" src={images.group43} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
