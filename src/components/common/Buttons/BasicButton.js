import React from "react";
const BasicButton = props => {
  const { className, onClick, title } = props;
  return (
    <button
      type="button"
      className={`btn ${className}`}
      {...props}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default BasicButton;
