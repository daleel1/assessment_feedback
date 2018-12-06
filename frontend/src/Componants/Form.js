import React, { Component } from "react";
import DropDownT from "./DropDownList";
import DetailForm from "./Fields";



export default class Form extends Component {
    render() {
        return (
            <div>
                <DropDownT />
                <DetailForm/>

            </div>
        );
    }
}