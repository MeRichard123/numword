import React from "react";
import "../App.css";

class Delete extends React.Component {
  render() {
    return (
      <button onClick={this.props.updateScreen} className="key">
        <span>X</span>
      </button>
    );
  }
}

export default Delete;
