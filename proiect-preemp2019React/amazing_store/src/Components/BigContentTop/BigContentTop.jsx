import React from "react";
import "./BigContentTop.css";

const BigContentTop = () => {
  return (
    <div className="bigContentTop-wrapper">
      <div className="bigContentTop-top">
        <p className="bigContentTop-catName">Creams&Gels</p>
        <p className="s">
          Showing 60 of 392{" "}
          <span>
            <i className="fas fa-chevron-left" />
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </p>
      </div>
      <div className="bigContentTop-btm">
        <div className="left-top">
          <p>
            BRAND: <span>ALL BRANDS</span>
          </p>
          <p>
            SKIN TYPE: <span>FOR OIL SKIN</span>
          </p>
          <p>
            AGE: <span>30+</span>
          </p>
        </div>
        <div className="right-top">
          <p>
            SORT: <span>BY POPULARITY</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigContentTop;
