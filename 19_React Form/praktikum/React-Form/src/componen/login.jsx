import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import './style.css'
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate()

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail();
    validatePassword();
    if (emailError === "" && passwordError === "") {
      console.log("Login successful");
      alert("Berhasil")
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="text-center">
              Belum Terdaftar?{" "}
              {/* <span className="link-primary" onClick={() => navigate('/Register')}>
                Sign Up
              </span> */}
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onBlur={validateEmail}
            className="form-control mt-1"
          />
          {emailError && <div>{emailError}</div>}
        </div>
        <div className="form-group mt-3">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onBlur={validatePassword}
            className="form-control mt-1"
          />
          {passwordError && <div>{passwordError}</div>}
          </Form.Group>
        </div>
        <div className="d-grid gap-2 mt-4">
        <button type="submit" className="btn btn-primary" >Submit
        </button>
        </div>
        <p className="text-center mt-2">
            </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;