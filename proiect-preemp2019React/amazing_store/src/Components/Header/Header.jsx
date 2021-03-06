import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Contact from "../Contact/Contact";
import NavigationBar from "../Navigation/Navigation-bar";
import SearchBar from "../SearchBar/SearchBar";
import CartBtn from "../CartBtn/CartBtn";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ["Los Angeles", "New York", "Timisoara"]
    };
  }
  render() {
    return (
      <div className="header-container">
        <div className="header-top-container">
          <Logo />
          <Contact location={this.state.location} />
          <NavigationBar />
        </div>
        <div className="header-bottom">
          <SearchBar />
          <CartBtn />
        </div>
      </div>
    );
  }
}
export default Header;
