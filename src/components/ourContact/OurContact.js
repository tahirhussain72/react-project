import React from "react";
import "./OurContact.css";

const OurContact = () => {
  return (
  
      <div className="">
        <iframe
          className="google"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26572.969486866656!2d73.04404333559083!3d33.64106289208879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94df4757096d%3A0x4a21728543b52192!2sSatellite%20Town%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1684673690720!5m2!1sen!2s"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="google-map"
        ></iframe>
      </div>
  );
};

export default OurContact;
