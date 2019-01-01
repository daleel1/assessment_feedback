import React from "react";

export default class Comment extends React.Component {
  state = {
    value: 0
  };

  constructor(props) {
    super(props);
    this.descriptionRef = React.createRef();
  }

  handleChange = event => this.setState({ value: event.target.value });

  onSubmit = event => {
    event.preventDefault();
    const body = {
      someone_description: this.descriptionRef.current.value
    };
    console.log(body.someone_fname);

    fetch("/url", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(body)
    })
      .then(response => {
        this.descriptionRef.current.value = "";
        this.setState({ value: 0 });
      })
      .then(console.log(body))
      .catch(error => console.error(error));
  };

  render() {
    return (
      <div className="container mt-2">
        <form>
          <div className="form-group">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <br />
                  <label className="font-weight-bold" htmlFor="description">
                    Comments will be REALLY helpful to understand how
                    they can improve. Please share any specific related examples.
                  </label>
                  <textarea
                    className="input form-control form-control-lg"
                    placeholder="Your Description"
                    ref={this.descriptionRef}
                    row="8"
                  />
                  <div
                    className="btn-toolbar justify-content-between"
                    role="toolbar"
                  >
                    {/* <button
                      className="btn btn-primary mt-2"
                      onClick={e => this.onSubmit(e)}
                    >
                      Submit
                    </button> */}
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
