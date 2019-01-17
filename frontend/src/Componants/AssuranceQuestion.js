import React from "react";

class AssuranceQuestion extends React.Component {
  state = {
    values: []
  };
  componentDidMount() {
    fetch("https://api.myjson.com/bins/8oy5q")
      .then(res => res.json())
      .then(data => {
        this.setState({ values: data });
        console.log(data);
      });
  }
  /*when input changes,call addValues({
              inputKey: inputValue,
              key2: value2
          })*/

  render() {
    return (
      <div>
        <div className="drop-down mt-5">
          <div className="container">
            <select
              className="custom-select mt-3"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option>
                Have you worked with him/her enough to give feedback on this? *
              </option>
              <option value={"Yes"}>Yes</option>
              <option value={"No"}>No</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default AssuranceQuestion;
