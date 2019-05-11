import React from "react";
const BasicButton = props => {
  const { className, title, type, onClick } = props;
  return (
    <button
      type={`${!type ? "button" : type}`}
      className={`btn ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default BasicButton;
