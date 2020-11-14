import React from "react";

const Input = ({ name, type }) => {
  return (
    <label>
      <input type={type} placeholder={name} required />
    </label>
  );
};

export default Input;
