import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Contact from "../Contact/Contact";
import NavigationBar from "../Navigation/Navigation-bar";
import SearchBar from "../SearchBar/SearchBar";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-top-container">
          <Logo />
          <Contact />
          <NavigationBar />
        </div>
        <div class="header-bottom">
          <SearchBar />
        </div>
      </div>
    );
  }
}
export default Header;
