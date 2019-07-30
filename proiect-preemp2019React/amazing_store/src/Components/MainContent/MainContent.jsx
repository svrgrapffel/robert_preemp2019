import React from "react";
import "./MainContent.css";
import Sidebar from "../Sidebar/Sidebar";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {
        FACE: [
          "Creams&Gels",
          "Patches",
          "Emulsion",
          "Toners",
          "Face Cleansing",
          "Make Up Reomval",
          "Scrubs",
          "Peeling",
          "Masks"
        ],
        BODY: [],
        FOOT: [],
        HANDS: [],
        HAIR: [],
        MAKEUP: []
      }
    };
  }

  render() {
    return <Sidebar categories={this.state.categories} />;
  }
}

export default MainContent;
