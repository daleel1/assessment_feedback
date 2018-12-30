import React from "react";
import Student from "./Student";

const Students = props => {
  return (
    <div className="events">
      {props.Students.map(function(student, i) {
        return (
          <div key={i}>
            <Student
              key={i}
              firstName={student.FirstName}
              lastName={student.LastName}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Students;
