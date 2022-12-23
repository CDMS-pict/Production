import React from "react";
import "./formInputTech.css";



function DateInput(props) {
  const { label, ...inputProps } = props;

  return (
      <div className="forminput dateforminput">
        <label>{label}</label>
        <input type="date"  {...inputProps} />
      </div>
  );
}

export default DateInput;
