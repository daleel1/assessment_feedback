import React from "react";
import { RadioGroup, RadioButton } from "react-radio-buttons";

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
    return (
      <div className="container mt-2">
        <h4 className="text-center mb-3 mt-5">
          Please select a topic area to give feedback on
        </h4>
        <RadioGroup onChange={this.onChange}>
          <RadioButton value="1" className="btn btn-warning">
            participating in my class
          </RadioButton>
          <RadioButton value="2">supporting my class</RadioButton>
          <RadioButton value="3">solving problems</RadioButton>
          <RadioButton value="4">taking responsibility</RadioButton>
          <button type="button" classNaem="btn btn-warning">
            hi
          </button>
        </RadioGroup>
      </div>
    );
  }
}
