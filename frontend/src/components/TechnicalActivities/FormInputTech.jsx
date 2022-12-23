import React from "react";
import "./formInputTech.css";

function FormInput(props) {
  const { label, ...inputProps } = props;
  return (
    <div className="forminput">
      <label>{label}</label>
      <input {...inputProps} />
    </div>
  );
}

export default FormInput;
