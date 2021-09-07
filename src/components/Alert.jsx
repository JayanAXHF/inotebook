import React from "react";

const Alert = (props) => {
  return (
    <center>
      <div id="id" className="alert alert-primary text-center" role="alert">
        {props.message}
      </div>
    </center>
  );
};

export default Alert;
