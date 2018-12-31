import React, { Component } from "react";
import DetailForm from "./Fields";
import FeedBackers from "./FeedBackers";
import FeedBackees from "./FeedBackees";
import SoftSkills from "./SoftSkills";
import SubSoftSkills from "./SubSoftSkills";
import AssuranceQuestion from "./AssuranceQuestion";

export default class Form extends Component {
  render() {
    return (
      <div>
        <FeedBackers />
        <FeedBackees />
        <SoftSkills />
        {/* <DetailForm /> */}
        <SubSoftSkills />
        <AssuranceQuestion />
      </div>
    );
  }
}
