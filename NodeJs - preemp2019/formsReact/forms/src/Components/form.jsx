import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(
      {
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
      },
      console.log("Submit = ", this.state)
    );
  };

  handleChange = event => {
    /* console.log(event.target.name);
    console.log(event.target.value);*/
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    /*console.log(this.state);*/
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          alignItems: "flex-start"
        }}
      >
        <label>
          FIRST NAME:
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          SECOND NAME:
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          PHONE:
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </label>
        <label>
          EMAIL:
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

export default Form;
