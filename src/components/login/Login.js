import React from "react";
import "./login.css";
import { topMenuLeft } from "../../data/constant/menuItem";
const Login = () => {
  return (
    <div className="login">
      <h3>Let's Talk</h3>
      <div className="row">
        <div className="col-md-3">
          <h1 className="login-heading">Leave Us Your Info</h1>
          <p className="login-para">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings.
          </p>
        </div>
        <div className="col-md-6">
            <div className="input-info">
                <input type="text" placeholder="Your Name (Required)" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Website" />
                <textarea name="" placeholder="Comment" id="" cols="10" rows="10"></textarea>
                <button className="send-now">
                SEND NOW</button>
            </div>
        </div>
        <div className="col-md-3">
            <div className="login-icon">
                {
                topMenuLeft.map((item,i)=>(
                    <div key={i}>
                    <span>{item.icon}</span>
                    {item.text}

                    </div>
                ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
