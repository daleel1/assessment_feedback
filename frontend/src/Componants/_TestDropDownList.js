import React from "react";

class DropDownT extends React.Component {
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
                    <p>
                        Code to fetch the list of the options in the dropdown, which runs
                        when the page loads
          </p>
                    <div className="container">
                        <select className="custom-select" id="inputGroupSelect01">
                            {this.state.values.map(obj => {
                                return <option value={obj.id}>{obj.name}</option>;
                            })}
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default DropDownT;
