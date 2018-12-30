import React from "react";

const Student = props => {
  return (
    <span>
      <img src={props.image} alt={props.name} />
      <h1>
        {props.FirstName}
        {props.LastName}
      </h1>
    </span>
  );
};

export default Student;
