import React from "react";

export default class DetailForm extends React.Component {
  state = {
    value: 0,
    values: []
  };

  constructor(props) {
    super(props);
    this.firstNameRef = React.createRef();
    this.surnameRef = React.createRef();
    this.descriptionRef = React.createRef();
  }
  componentDidMount() {
    fetch("https://api.myjson.com/bins/8oy5q")
      .then(res => res.json())
      .then(data => {
        this.setState({ values: data });
        console.log(data);
      });
  }

  handleChange = event => this.setState({ value: event.target.value });

  onSubmit = event => {
    event.preventDefault();
    const body = {
      someone_fname: this.firstNameRef.current.value.toUpperCase() + 2,
      someone_surname: this.surnameRef.current.value.toUpperCase() + 2,
      someone_description: this.descriptionRef.current.value.toUpperCase() + 2,
      someone_option: this.state.value
    };
    console.log(body.someone_fname);
    if (body.someone_fname === "2") {
      alert("Hello! first name cannot be empty!!");
    }
    // else if (body.someone_surname === "2") {
    //   alert("Hello! surname cannot be empty!!");
    // }
    else if (body.someone_description === "2") {
      alert("Hello! Description cannot be empty!!");
    } else if (body.someone_option === 0) {
      alert("Hello! You need to select at least on opetion!!");
    } else {
      fetch("/url", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(body)
      })
        .then(response => {
          this.firstNameRef.current.value = "";
          this.surnameRef.current.value = "";
          this.descriptionRef.current.value = "";
          this.setState({ value: 0 });
        })
        .then(console.log(body))
        .catch(error => console.error(error));
    }
  };

  render() {
    return (
      <div className="container mt-2">
        <h1 className="text-center mb-3">Fields</h1>
        <form>
          <div className="form-group">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <br />
                  <label className="font-weight-bold" htmlFor="first name">
                    First Name
                  </label>

                  <input
                    className="input form-control form-control-lg"
                    placeholder="First name"
                    ref={this.firstNameRef}
                  />
                  <br />
                  <label
                    className="font-weight-bold"
                    htmlFor="surname"
                    for="validationCustom01"
                  >
                    Surname
                  </label>
                  <input
                    type="text"
                    className="input form-control form-control-lg"
                    placeholder="Surname"
                    id="validationCustom01"
                    required
                    ref={this.surnameRef}
                  />
                  <br />

                  <label className="font-weight-bold" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    className="input form-control form-control-lg"
                    placeholder="Your Description"
                    ref={this.descriptionRef}
                    row="8"
                  />
                  <br />

                  <label class="font-weight-bold mt-4">
                    Code to fetch the list of the options in the dropdown, which
                    runs when the page loads
                    <select
                      className="custom-select mt-3"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option> select an option..</option>
                      {this.state.values.map(obj => {
                        return (
                          <option key={obj.id} value={obj.id}>
                            {obj.name}
                          </option>
                        );
                      })}
                    </select>
                  </label>

                  <div
                    className="btn-toolbar justify-content-between"
                    role="toolbar"
                  >
                    <button
                      className="btn btn-primary"
                      onClick={e => this.onSubmit(e)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
