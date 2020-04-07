import React from "react";
import "../App.css";

class Clear extends React.Component {
  render() {
    return (
      <button onClick={this.props.updateScreen} className="key">
        <span>CE</span>
      </button>
    );
  }
}

export default Clear;
