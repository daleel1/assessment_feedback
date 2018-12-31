import React, { Component } from "react";
import DropDownT from "./DropDownList";
import DetailForm from "./Fields";

export default class Form extends Component {
  state = {
    allValues: {
      /*key1: "val1", key2: "val2"*/
    }
  };
  _onsub() {}
  addValues(valuesDict) {
    let allValuesCopy = { ...this.allValues };
    valuesDict.forEach(property => {
      allValuesCopy.property = valuesDict[property];
      //add form values to parent's state so they can be submitted later
    });
    this.setState({ allValues: allValuesCopy });
  }

  render() {
    return (
      <div>
        <DropDownT addValues={this.addValues} />
        <DetailForm addValues={this.addValues} />
        <button onclick="_onsub()" />
      </div>
    );
  }
}
