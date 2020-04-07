import React from "react";
import { Button, Display, Enter, Delete, Clear } from "./Components";
import "./App.css";

var converter = require("number-to-words");

class App extends React.Component {
  // Class Constructor Initalise State
  constructor(props) {
    super(props); // passing super to props lets you do this.props in the constructor
    this.state = {
      inputNumber: "",
      buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  }
  // Method to append a new digit
  updateDisplay = (newVal) => {
    this.setState({ inputNumber: this.state.inputNumber + newVal });
  };
  // Method to remove the last digit
  removeDigit = () => {
    let current = this.state.inputNumber;
    let newVal = current.slice(0, current.length - 1);
    this.setState({ inputNumber: newVal });
  };
  // Method to Deal with the conversion of number --> word
  handleSubmit = () => {
    if (this.state.inputNumber !== "") {
      try {
        let output = converter.toWords(this.state.inputNumber);
        this.setState({ inputNumber: output });
      } catch (err) {
        let number = this.state.inputNumber;
        if (number.length > 16) {
          this.setState({ inputNumber: "Error! Too long" });
        } else {
          this.setState({ inputNumber: "NaN!!" });
        }
      }
    }
  };
  // Clears the state to clear the screen
  handleClear = () => {
    this.setState({ inputNumber: "" });
  };
  render() {
    // Go over the array of numbers and create a button for each
    // Array is in the state only 1-9 because 0 is between del and Enter
    const buttons = this.state.buttons.map((buttonValue) => {
      return (
        <Button
          className="key"
          value={buttonValue}
          updateScreen={this.updateDisplay}
        />
      );
    });
    return (
      <div className="App">
        <h1>Number to Word Converter</h1>
        <Display className="display" number={this.state.inputNumber} />
        <div className="button-group">
          {buttons}
          <Delete className="key" updateScreen={this.removeDigit} />
          <Button className="key" value="0" updateScreen={this.updateDisplay} />
          <Enter className="key" updateScreen={this.handleSubmit} />
          <Clear className="key" updateScreen={this.handleClear} />
        </div>
      </div>
    );
  }
}
export default App;
