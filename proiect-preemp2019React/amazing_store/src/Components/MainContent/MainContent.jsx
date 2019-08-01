import React from "react";
import "./MainContent.css";
import Sidebar from "../Sidebar/Sidebar";
import BigContent from "../BigContent/BigContent";

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
        BODY: ["ceva-body"],
        FOOT: ["ceva-foot"],
        HANDS: ["ceva-hands"],
        HAIR: ["ceva-hair"],
        MAKEUP: ["ceva-mkup"]
      },
      showSubcat: null
    };
  }
  showMeSubcat = catName => {
    this.setState({ showSubcat: catName });
    console.log(catName);
  };

  render() {
    return (
      <>
        <Sidebar
          categories={this.state.categories}
          showSubcat={this.state.showSubcat}
          showMeSubcat={this.showMeSubcat}
        />
        <BigContent />
      </>
    );
  }
}

export default MainContent;
