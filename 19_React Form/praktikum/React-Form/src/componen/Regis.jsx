
import React, { useState } from "react"
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './style.css'

export default function (props) {
  const navigate = useNavigate();
  let [authMode, setAuthMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Email Salah");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError("Password Harus tidak lebih 8 Karakter");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      Email: email,
      Pass : password
    }

    validateEmail();
    validatePassword();
    if (email === "" && password === ""){
      alert("Email dan Password Kosong, Harus diisi");
      return;
    }
    if (emailError === "" && passwordError === "") {
      console.log("Login successful");
      alert("Berhasil");
      navigate('/Home');
    }
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onBlur={validateEmail}
                className="form-control mt-1"
                placeholder="Enter email"
              />
              {emailError && <div style={{color: 'red'}}>{emailError}</div>}
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
                 placeholder="Password"
              />
              {passwordError && <div style={{color: 'red'}}>{passwordError}</div>}
            </Form.Group>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Muamar"
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Fajar"
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="FajarGanteng"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <label>Password</label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          </div>
          <div className="form-group mt-3">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <label>Confirm Password</label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" href="#" onClick={() => navigate('/Home')}>
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
          
          </p>
        </div>
      </form>
    </div>
  )
}