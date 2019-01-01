import React, { Component } from "react";

export default class Scale extends Component {
  render() {
    return (
      <div className="container  mt-4">
        <div className="container  col-md-8 m-auto">
          <h4>How often do they do this? *</h4>

          <div>
            {/* <label for="customRange3">Never</label> */}
            <p className="float-right">always</p>
            <p className="float-left">Never</p>
            <p>Sometimes</p>

            <input
              type="range"
              className="custom-range"
              min="0"
              max="10"
              step="1"
              id="customRange3"
            />
          </div>
        </div>
      </div>
    );
  }
}
