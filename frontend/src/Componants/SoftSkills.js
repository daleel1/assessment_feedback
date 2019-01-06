import React from "react";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import "../Styling/Styling.css";

export default class SoftSkills extends React.Component {
  onChange = () => {
    fetch("/url", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        skill: this.value
      })
    }).catch(error => console.error(error));
  };

  render() {
    return <div className="container mt-2">
        <h4 className="text-center mb-3 mt-5">
          Please select a topic area to give feedback on
        </h4>
        <RadioGroup className="darkText" onChange={this.onChange}>
          <RadioButton iconSize={20} value="1">
            participating in my class
          </RadioButton>
          <RadioButton iconSize={20}  value="2">
            supporting my class
          </RadioButton>
        <RadioButton iconSize={20} className="text-dark" value="3">
            solving problems
          </RadioButton>
        <RadioButton iconSize={20} value="4">taking responsibility</RadioButton>
        </RadioGroup>
      </div>;
  }
}
