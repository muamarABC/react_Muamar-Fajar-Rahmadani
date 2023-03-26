
import React from "react"
import '../componen/contacc.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";


 function Contact () {
    const navigasi = useNavigate();
  return (
    <>
    <div className="form-container">
      <div className="About col-4" >
        <h2>Contact Me</h2>
        <p>Jika anda membutuhkan bantuan atau informasi yang kurang di mengerti bisa lakukan pengisian pada table disamping</p>
      </div>
      <Form className="form">
        <div className="form-content">
          <h3 className="form-title ">Form</h3>
          <div className="form-group col-md-12 position-relative">
            <Row>
                <Col>
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Muamar"/>
                </Col>
                <Col>
                <label>Last Name</label>
                <input
                type="text"
                className="form-control mt-1"
                placeholder="Fajar"/>
                </Col>
            </Row>
          </div>
          <div className="form-group mt-3 position-relative">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"/>
         </div>
          <div className="form-group mt-3">
            <label>What can We Help You?</label>
            <input
              type="textarea"
              className="form-control mt-1"
              placeholder="Enter Some Words"
            />
          </div>
          <div className="mt-3">
            <button type="submit" className="btn btn-primary"
            onClick={() => navigasi('/')}>
              Submit
            </button>
          </div>
        </div>
      </Form>
    </div>
    </>
  )
}
export default Contact;