import React from "react";
import "./services.css";
import { images } from "../../data/assets";
import { BsChevronRight } from "react-icons/bs";
const OurServices = () => {
  return (
    <div className="service">
      <div className="services-heading">
        <h2 className="our">OUR SERVICES</h2>
        <h1 className="main-hd">What We Have Done</h1>
      </div>
      <div className="row main-card">
        <div className="col-md-4">
          <div className="card">
            <img className="svg" src={images.svg1} alt="" />
            <div className="card-body">
              <h4 className="card-title">Business Insurance</h4>
              <p className="card-text">
                A wonderful serenity has taken <br/>possession of my entire soul,
                like<br/> these sweet mornings of spring.
              </p>
              <div className="rightarrow">
                <BsChevronRight />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card">
            <img className="svg" src={images.svg3} alt="" />
            <div className="card-body">
              <h4 className="card-title">Banking Investigation</h4>
              <p className="card-text">
                A wonderful serenity has taken <br/>possession of my entire soul,
                like<br/> these sweet mornings of spring.
              </p>
              <div className="rightarrow">
                <BsChevronRight />
              </div>
            </div>
            </div>
        </div>
        <div className="col-md-4">
        <div className="card">
            <img className="svg" src={images.svg2} alt="" />
            <div className="card-body">
              <h4 className="card-title">Finance Management</h4>
              <p className="card-text">
                A wonderful serenity has taken <br/>possession of my entire soul,
                like<br/> these sweet mornings of spring.
              </p>
              <div className="rightarrow">
                <BsChevronRight />
              </div>
            </div>
            </div>
        </div>
      </div>
      <div className="row main-card">
        <div className="col-md-4">
        <div className="card">
            <img className="svg" src={images.svg2} alt="" />
            <div className="card-body">
              <h4 className="card-title">Business Insurance</h4>
              <p className="card-text">
                A wonderful serenity has taken <br/>possession of my entire soul,
                like<br/> these sweet mornings of spring.
              </p>
              <div className="rightarrow">
                <BsChevronRight />
              </div>
            </div>
            </div>
        </div>
        <div className="col-md-4">
        <div className="card">
            <img className="svg" src={images.svg4} alt="" />
            <div className="card-body">
              <h4 className="card-title">Business Insurance</h4>
              <p className="card-text">
                A wonderful serenity has taken <br/>possession of my entire soul,
                like<br/> these sweet mornings of spring.
              </p>
              <div className="rightarrow">
                <BsChevronRight />
              </div>
            </div>
            </div>
        </div>
        <div className="col-md-4">
        <div className="card">
            <img className="svg" src={images.svg5} alt="" />
            <div className="card-body">
              <h4 className="card-title">Business Insurance</h4>
              <p className="card-text">
                A wonderful serenity has taken <br/>possession of my entire soul,
                like<br/> these sweet mornings of spring.
              </p>
              <div className="rightarrow">
                <BsChevronRight />
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
