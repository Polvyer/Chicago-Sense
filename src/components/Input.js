import React from "react";

const Input = ({ name, type, field, short, changeField }) => {
  return (
    <label>
      <input
        value={field}
        type={type}
        placeholder={name}
        onChange={changeField(short)}
        required
      />
    </label>
  );
};

export default Input;
