import React from "react";
import Product from "../Product/Product";

class BigContentCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch("/products")
      .then(res => res.json())
      .then(products =>
        this.setState({ products }, () =>
          console.log("Products fetched", products)
        )
      );
  }
  render() {
    // console.log(this.state);
    return <Product products={this.state.products} />;
  }
}
export default BigContentCenter;
