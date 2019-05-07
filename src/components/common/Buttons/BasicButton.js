import React from "react";
const BasicButton = props => {
  const { className, title, type } = props;
  return (
    <button type={`${!type ? "button" : type}`} className={`btn ${className}`}>
      {title}
    </button>
  );
};

export default BasicButton;
