import React from "react";

const BasicInput = props => {
  const { sign, placeholder, ariaLabel, type, onChange, name, value } = props;

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          {sign}
        </span>
      </div>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        aria-label={ariaLabel}
        aria-describedby="basic-addon1"
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
};

export default BasicInput;
