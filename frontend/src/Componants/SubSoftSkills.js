import React from "react";
import { RadioGroup, RadioButton } from "react-radio-buttons";

export default class SubSoftSkills extends React.Component {
  onChange = () => {
    fetch("/url", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        supSoftSkill: this.value
      })
    }).catch(error => console.error(error));
  };

  render() {
    return (
      <div className="container mt-2">
        <h4 className="text-center mb-3 mt-5">
          please select a habit to give feedback on
        </h4>
        <RadioGroup className="darkText" onChange={this.onChange}>
          <RadioButton iconSize={20} value="1">
            I update others every day on progress with tasks
          </RadioButton>
          <RadioButton iconSize={20} value="2">
            I reply as sson as possible to individual or group communication and
            I let people know I've received their messages(e.g. thumbs up is
            Slack)
          </RadioButton>
          <RadioButton iconSize={20} value="3">
            I ask questions when I don't understand or am unsure about what to
            do
          </RadioButton>
        </RadioGroup>
      </div>
    );
  }
}
