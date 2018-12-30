import React from "react";

export default class DetailForm extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.firstNameRef = React.createRef();
    this.surnameRef = React.createRef();
    this.emailRef = React.createRef();
  }

  onSubmit = event => {
    event.preventDefault();
    const body = {
      someone_fname: this.firstNameRef.current.value.toUpperCase(),
      someone_surname: this.surnameRef.current.value.toUpperCase(),
      someone_email: this.emailRef.current.value.toUpperCase()
    };
    if (
      body.someone_fname === "" ||
      body.someone_surname === "" ||
      body.someone_email === ""
    ) {
      alert("Hello! filds cannot be empty!!");
    }
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
        this.emailRef.current.value = "";
        this.setState({ message: true });
      })
      .then(console.log(body))
      .catch(error => console.error(error));
  };

  render() {
    return (
      <div className="container mt-2">
        <h1 className="text-center mb-3">Add Floaters</h1>
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
                  <label className="font-weight-bold" htmlFor="surname">
                    Surname
                  </label>
                  <input
                    className="input form-control form-control-lg"
                    placeholder="Surname"
                    ref={this.surnameRef}
                  />
                  <br />
                  <label className="font-weight-bold" htmlFor="email">
                    Email
                  </label>
                  <textarea
                    className="input form-control form-control-lg"
                    placeholder="email"
                    ref={this.emailRef}
                    type="email"
                    row="8"
                  />
                  <br />
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
