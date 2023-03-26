
import React from "react"
import won from '../gambar/owner.png'
import { useNavigate } from "react-router-dom";
import './Styling.css'

export default function () {
    const navigasi = useNavigate()
  return (
    <>
    <div className="Aboutme">
    <div className="container text-center">
      <h2 className="display-3" id="about">
        About Me
      </h2>
      <p>Berikut informasi mengenai website kami</p>
      <div className="row pt-4 gx-4 gy-4">
        <div className="col-md-15 text-center owner">
          <img src={won} className="rounded-circle" />
          <br />
          <br />
          <h4>Muamar Fajar Rahmadani</h4>
          <p>Telkom University</p>
          <p>S1-Informatika</p>
        </div>
      </div>
      <button className="btn btn-primary" onClick={() => navigasi("/")}>Back</button>
    </div>
    </div>
    </>
  )
}