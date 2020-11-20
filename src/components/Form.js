import React, { useState } from "react";
import Input from "./Input";
import { f as firebase } from "../firebase";

const Form = () => {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const changeField = (key) => (e) => {
    const newUser = {
      ...user,
      [key]: e.target.value,
    };

    setUser(newUser);
  };

  const fields = [
    {
      name: "First name",
      type: "text",
      field: user.fName,
      short: "fName",
    },
    {
      name: "Last name",
      type: "text",
      field: user.lName,
      short: "lName",
    },
    {
      name: "Username",
      type: "text",
      field: user.username,
      short: "username",
    },
    {
      name: "Email",
      type: "email",
      field: user.email,
      short: "email",
    },
    {
      name: "Password",
      type: "password",
      field: user.password,
      short: "password",
    },
    {
      name: "Confirm",
      type: "password",
      field: user.confirm,
      short: "confirm",
    },
  ];

  const addUser = (e) => {
    e.preventDefault();
    if (user.password !== user.confirm) {
      alert("Passwords must match!");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        window.location = "./home.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <form onSubmit={addUser}>
      <fieldset className="account-info">
        {fields.map((field) => (
          <Input
            key={field.name}
            name={field.name}
            type={field.type}
            field={field.field}
            short={field.short}
            changeField={changeField}
          />
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
