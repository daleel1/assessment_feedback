import React, { Component } from "react";

export default class Scale extends Component {
  constructor(props) {
    super(props);
    this.scale = React.createRef();
  }

  onSubmit = event => {
    event.preventDefault();
    const body = {
      scale_value: this.scale.current.value
    };
    console.log(body.scale_value);
    // fetch("/url", {
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   method: "POST",
    //   body: JSON.stringify(body)
    // }).catch(error => console.error(error));
  };

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
              ref={this.scale}
              onChange={e => this.onSubmit(e)}
            />
            {/* {console.log(input.value)} */}
          </div>
        </div>
      </div>
    );
  }
}
