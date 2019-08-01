import React from "react";
import "./BigContent.css";
import BigContentTop from "../BigContentTop/BigContentTop";
import BigContentCenter from "../BigContentCenter/BigContentCenter";

class BigContent extends React.Component {
  render() {
    return (
      <div className="bigContent">
        <BigContentTop />
        <hr />
        <BigContentCenter />
      </div>
    );
  }
}

export default BigContent;
