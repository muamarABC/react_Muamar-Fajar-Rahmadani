import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import landing from '../assets/landing.png'
import { useNavigate } from 'react-router-dom';
import './style.css'

export default function Login() {
    const navigate = useNavigate();
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

  const handleLogin = (event) => {
    event.preventDefault();
    const dummyUser = {email: 'admin@gmail.com', password: 'password123'};
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      localStorage.setItem('isLoggedIn', true);
      alert("Berhasil Login");
      navigate("/Home");
    } else if (email === dummyUser.email && password === dummyUser.password) {
      localStorage.setItem('user', JSON.stringify(dummyUser));
      localStorage.setItem('isLoggedIn', true);
      window.location.reload();
    } else {
      alert("Gagal Login! Email atau Password Salah")
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
   
  return (
    <div className="form-container">
        <form className="form" onSubmit={handleLogin}>
          <div className="form-content">
            <h3 className="form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" href="#" onClick={() => navigate('/Register')}>
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
