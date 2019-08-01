import React from "react";
import "./Contact.css";

const Contact = props => {
  return (
    <div className="contact">
      <h4 className="subTitle">
        <i className="fas fa-map-marker-alt" /> My city:{" "}
        <a>
          {" "}
          <select className="locationSelect">
            {props.location.map(city => {
              return <option className="locationSelect">{city}</option>;
            })}
          </select>
        </a>
      </h4>

      <div className="subTitle">
        <i className="fas fa-phone" /> 8 800505-04-83
      </div>
    </div>
  );
};

export default Contact;
