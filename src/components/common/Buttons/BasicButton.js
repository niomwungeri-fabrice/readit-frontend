import React from "react";
const BasicButton = props => {
  const { className, title, type, onClick, disabled } = props;
  return (
    <button
      type={`${!type ? "button" : type}`}
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default BasicButton;
