import React from "react";
import "../index.css";
const Alert = (props) => {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "Error";
    }

    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <center>
      {" "}
      <div style={{ height: "50px" }}>
        {props.alert && (
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
            id="alert"
          >
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          </div>
        )}
      </div>
    </center>
  );
};
export default Alert;
