// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate()

const Register = () => (
  
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
            type="email"
            className="form-control mt-1"
            placeholder="Muamar"
          />
        </div>
        <div className="form-group mt-3">
          <label>Last Name</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Fajar"
          />
        </div>
        <div className="form-group mt-3">
          <label>Username</label>
          <input
            type="email"
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
);

export default Register;
