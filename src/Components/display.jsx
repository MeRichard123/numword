import React from "react";
import "../App.css";

class Display extends React.Component {
  render() {
    return <h2 className="display">{this.props.number}</h2>;
  }
}

export default Display;
