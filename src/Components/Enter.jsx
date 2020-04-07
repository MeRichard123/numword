import React from "react";
import "../App.css";

class Enter extends React.Component {
  render() {
    return (
      <button onClick={this.props.updateScreen} className="key">
        <span>></span>
      </button>
    );
  }
}

export default Enter;
