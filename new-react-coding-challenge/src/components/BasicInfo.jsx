import React from "react";
import "./BasicInfo.css";
//Creating a functional component giving it a prop of the individual variable which holds the person array of objects
const BasicInfo = ({ individual }) => {
  return (
    // Calling the MAP method/function
    <>
      {individual.map((data) => (
        <div className="seperate">
          <p>{data.name}</p>
          <p>{data.phone}</p>
          <p>{data.dob}</p>
        </div>
      ))}
      {/* <p>{individual[0].name}</p>
      <p>{individual[0].phone}</p>
      <p>{individual[0].dob}</p> */}
    </>
  );
};
export default BasicInfo;
