import React, { useState } from "react";
import axios from "axios";

// import { useNavigate } from "react-router-dom";

export const Register = (props) => {
  const [isuserName, setIsUsername] = useState(true);
  const [isemail, setIsEmail] = useState(true);
  const [ispassword, setIsPassword] = useState(true);

  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://websitelearnerstask-backend-bdap.onrender.com/register", {
        ...credentials,
      });
      console.log(res);
      if (res?.data?.status === "success") {
        window.location.replace("/");
        setIsUsername(true);
        setIsEmail(true);
        setIsPassword(true);
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.msg === "internal server error") {
        setIsUsername(false);
        setIsEmail(true);
        setIsPassword(true);

      } else if (error.response.data.msg === "email already exist") {
        setIsUsername(true);
        setIsEmail(false);
        setIsPassword(true);

      } else if (
        error.response.data.msg === "Password/Confirm Password dosent match"
      ) {
        setIsUsername(true);
        setIsEmail(true);
        setIsPassword(false);
      }
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={submitHandler}>
        <label htmlFor="username">username</label>
        <input
          type="username"
          placeholder="username"
          id="userName"
          onChange={handleInputChange}
          className="lInput"
        />
        <span className="username">{isuserName ? "" : "User already exist!"}</span>

        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleInputChange}
          className="lInput"
        />
        <span className="Email-already-exist">{isemail ? "" : "Email already exist!"}</span>

        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleInputChange}
          className="lInput"
        />

        <label htmlFor="confirmpassword">confirm password</label>
        <input
          type="password"
          placeholder="confirm password"
          id="confirmPassword"
          onChange={handleInputChange}
          className="lInput"
        />
        <span className="Password-dosent-match">{ispassword ? "" : "Password dosent match!"}</span>
        <button type="submit" className="lButton">
          Register
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login Here
      </button>
    </div>
  );
};

