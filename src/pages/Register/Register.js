import styles from "./Register.module.css";
import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div>
      <h1>Register yourself to post</h1>
      <p>Create your user and share your stories</p>
      <form>
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Username"
          ></input>
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail"
          ></input>
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insert your password"
          ></input>
        </label>
        <label>
          <span>Confirm password:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirm your password"
          ></input>
        </label>
        <button className="btn">Save</button>
      </form>
    </div>
  );
};

export default Register;
