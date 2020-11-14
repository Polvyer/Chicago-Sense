import React from "react";
import Input from "./Input";

const Form = () => {
  const fields = [
    {
      name: "First name",
      type: "text",
    },
    {
      name: "Last name",
      type: "text",
    },
    {
      name: "Username",
      type: "text",
    },
    {
      name: "Email",
      type: "email",
    },
    {
      name: "Password",
      type: "password",
    },
    {
      name: "Confirm",
      type: "password",
    },
  ];

  return (
    <form action="./home.html">
      <fieldset className="account-info">
        {fields.map((field) => (
          <Input key={field.name} name={field.name} type={field.type} />
        ))}
      </fieldset>
      <fieldset className="account-action">
        <button className="btn" type="submit" name="submit" value="Login">
          Register
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
