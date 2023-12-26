import styles from "./Register.module.css";
import { useState, useEffect } from "react";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password != confirmPassword) {
      setError("Passwords needs to be equal");
      return;
    }

    console.log(user);
  };

  return (
    <div className={styles.register}>
      <h1>Register yourself to post</h1>
      <p>Create your user and share your stories</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Username"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          ></input>
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insert your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <label>
          <span>Confirm password:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </label>
        <button className="btn">Save</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
