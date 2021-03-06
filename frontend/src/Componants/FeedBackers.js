import React from "react";

class FeedBackers extends React.Component {
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
          <p>Please tell us who you are?*</p>
          <div className="container">
            <select
              className="custom-select mt-3"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option>Select Your Name ..</option>
              {this.state.values.map(obj => {
                return (
                  <option key={obj.id} value={obj.id}>
                    {obj.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedBackers;
