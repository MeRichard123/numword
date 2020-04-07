import React from "react";
import "../App.css";

class Button extends React.Component {
  //create a Constuructor of the class to add state
  constructor(props) {
    super(props); // The super method allows you to use the "this" keyword
    this.state = {
      value: this.props.value, // create a state to store the buttons value
    };
    this.handleClick = this.handleClick.bind(this); // lets you use this on a method
  }
  handleClick() {
    this.props.updateScreen(this.state.value); // method to call the update screen function
  }
  render() {
    return (
      <button onClick={this.handleClick} className="key">
        <span>{this.props.value}</span>
      </button>
    );
  }
}

export default Button;
