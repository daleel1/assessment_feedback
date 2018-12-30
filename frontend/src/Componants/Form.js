import React, { Component } from "react";
import DetailForm from "./Fields";
import FeedBackers from "./FeedBackers";
import FeedBackees from "./FeedBackees";
import SoftSkills from "./SoftSkills";


export default class Form extends Component {
  render() {
    return (
      <div>
        <FeedBackers />
        <FeedBackees />
        <SoftSkills/>
        {/* <DetailForm /> */}
      </div>
    );
  }
}
