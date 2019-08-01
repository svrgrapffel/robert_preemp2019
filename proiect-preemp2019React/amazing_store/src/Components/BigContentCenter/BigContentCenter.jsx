import React from "react";
import Product from "../Product/Product";
import Prod from "../Json/produse";

class BigContentCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prodList: Prod
    };
  }
  render() {
    console.log(this.state);
    return <Product prodList={this.state.prodList} />;
  }
}
export default BigContentCenter;
