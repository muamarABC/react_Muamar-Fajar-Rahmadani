import React from 'react'
import Form from 'react-bootstrap/Form';
import landing from '../assets/landing.png'
import { Link } from 'react-router-dom';


export default function Register() {

  return (
    <div className="form-container">
      <form className="form">
        <div className="form-content">
          <h3 className="form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary">
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
            <Link to='/'>
            <button type="submit" className="btn btn-primary" >
              Submit
            </button>
            </Link>
          </div>
          <p className="text-center mt-2">
          
          </p>
        </div>
      </form>
    </div>

  )
}
