import React from "react";
import "./Sidebar.css";

const Sidebar = props => {
  const categories = Object.keys(props.categories);
  /*const showSubcat = Object.keys(props.showSubcat);*/

  const showSub = category => {
    return category.map((item, index) => {
      return (
        <li className="subCat-li" key={index}>
          {item}
        </li>
      );
    });
  };

  return (
    <div className="sidebar-container">
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <button
              className="categoryBtn"
              onClick={() => props.showMeSubcat(category)}
            >
              {category}
            </button>
            <ul className="subCat">
              {props.showSubcat === category &&
                showSub(props.categories[category])}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default Sidebar;
