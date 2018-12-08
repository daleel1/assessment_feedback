import React from "react";

class DropDownT extends React.Component {
  state = {
    values: [],
    value: 0
  };
  componentDidMount() {
    fetch("https://api.myjson.com/bins/8oy5q")
      .then(res => res.json())
      .then(data => {
        this.setState({ values: data });
        console.log(data);
      });
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
    fetch("/url", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        selectedOpetion: this.state.value
      })
    }).catch(error => console.error(error));
  };

  render() {
    return (
      <div>
        <div className="drop-down mt-5">
          <p>
            Code to fetch the list of the options in the dropdown, which runs
            when the page loads
          </p>
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <label>
                <select
                  className="custom-select" 
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option > select an option..</option>
                  {this.state.values.map(obj => {
                    return (
                      <option key={obj.id} value={obj.id}>
                        {obj.name}
                      </option>
                    );
                  })}
                </select>
              </label>
              {/* <button
                className="btn btn-primary ml-4"
                onClick={this.handleSubmit}
              >
                Export Chart
              </button> */}
              {/* <input
                className="uk-button uk-button-mini"
                type="submit"
                value="Submit"
              /> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DropDownT;
