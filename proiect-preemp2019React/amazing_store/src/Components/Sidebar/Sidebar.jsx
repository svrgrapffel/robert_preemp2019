import React from "react";
import "./Sidebar.css";

const Sidebar = props => {
  const categories = Object.keys(props.categories);

  return (
    <div className="sidebar-container">
      {categories.map((category, index) => {
        return (
          <>
            <button key={index} className="categoryBtn">
              {category}
            </button>
          </>
        );
      })}
    </div>
  );
};
export default Sidebar;
