import React, { Component } from "react";
import DetailForm from "./Fields";
import FeedBackers from "./FeedBackers";
import FeedBackees from "./FeedBackees";
import SoftSkills from "./SoftSkills";
import SubSoftSkills from "./SubSoftSkills";
import AssuranceQuestion from "./AssuranceQuestion";
import Scale from "./Scale";
import Comment from "./Comment";

export default class Form extends Component {
  render() {
    return (
      <div className=" ">
        <FeedBackers />
        <FeedBackees />
        <SoftSkills />
        {/* <DetailForm /> */}
        <SubSoftSkills />
        <AssuranceQuestion />
        <Scale />
        <Comment />
        <button className="btn btn-primary">Submit</button>
      </div>
    );
  }
}
