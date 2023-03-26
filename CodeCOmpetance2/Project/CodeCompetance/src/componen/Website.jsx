
import React from "react"
import './Styling.css'
import pnge from '../gambar/pnge.png'
import shop from '../gambar/shop.png'
import Service from '../gambar/Service.png'
import won from '../gambar/owner.png'
import ig from '../gambar/ig.png'
import fb from "../gambar/fb.png"
import ind from "../gambar/in.png" 
import { useNavigate } from "react-router-dom";

export default function (props) {
    const navigasi = useNavigate();
  return (
    <>
    <div className="container-fluid banner" id="home">
    <div className="container text-center">
      <h2 className="display-1"> Wellcome Guys!</h2>
      <h6 className="display-2"> Selamat Datang di website saya </h6>
      <a href="#layanan">
        <button className="btn btn-dark btn-lg">Cek Layanan</button>
      </a>
    </div>
  </div>
  <div className="container-fluid layanan pt-5 pb-5">
    <div className="container text-center">
      <h2 className="display-3" id="layanan">
        Layanan
      </h2>
      <p> Berikut adalah beberapa layanan yang disediakan oleh website kami</p>
      <div className="row pt-4">
        <div className="col-md-4">
          <span className="lingkaran ">
            <a href="" onClick={() => navigasi("/titip")}>
              <img className="gambar-krj" src={pnge} alt="" />
            </a>
          </span>
          <h3 className="mt-3">Titip Jual</h3>
          <p>Mau Jual Barang? Titipin Aja Ke Sini !!!</p>
        </div>
        <div className="col-md-4">
          <span className="lingkaran ">
            <img className="gambar-kr" src={shop} />
          </span>
          <h3 className="mt-3">Shop</h3>
          <p>Lihat Barang Menarik Kami !</p>
        </div>
        <div className="col-md-4">
          <span className="lingkaran ">
            <img className="gambar-sr" src={Service} />
          </span>
          <h3 className="mt-3">Service</h3>
          <p>Ada Kesulitan? Konsultasi Saja Kepada Kami</p>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid pt-5 pb-5 bg-dark-subtle">
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
    </div>
  </div>
  <footer className="footer ">
    <div className="footer-left">
      <h4>FajarJaya</h4>
      <p>Mari bergabung bersama kami untuk menjual barang-barang anda</p>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Masukkan email dengan benar.
          </div>
          <button
            className="btnSubmit"
            id="subEmail"
            style={{
              width: "max-content",
              backgroundColor: "lightcoral",
              borderRadius: 20,
              border: "none",
              padding: "10% 20% 10% 20%"
            }}
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
    <div className="footer-center">
      <h4>Useful Links</h4>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About us</a>
      </li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">Terms of Service</a>
      </li>
      <li>
        <a href="#">Privacy Policy</a>
      </li>
    </div>
    <div className="footer-right">
      <h4>About Me</h4>
      <li>Jl. H. Umar</li>
      <li>
        <b>Phone : </b>+62822102356452
      </li>
      <li>
        {" "}
        <b>Email : </b> muamarfajar9@gmail.com{" "}
      </li>
      <div className="bulat">
        <a className="ig" href="https://www.instagram.com/_muamarf/">
        <img src={ig} alt="" />
        </a>
        <a className="fb" href="https://www.facebook.com/Maususu0/">
          <img src={fb} alt="" />
        </a>
        <a
          className="in"
          href="https://www.linkedin.com/in/muamar-fajar-rahmadani-211b00222/"
        >
          <img src={ind} alt="" />
        </a>
        <br />
        <a onClick={() => navigasi("/contact")}>
          <button
            style={{
              backgroundColor: "rgb(129, 130, 196)",
              color: "aliceblue",
              borderRadius: 20,
              width: "max-content",
              padding: "10% 20% 10% 20%",
              textAlign: "center",
              borderColor: "aliceblue"
            }}
          >
            Contact Me
          </button>
        </a>
      </div>
    </div>
  </footer>
  <div className="Copy">
    <p>
      © Copyright <b>Fajar</b>. All Rights Reserved
    </p>
    <p>Designed by FajarJaya</p>
  </div>
    </>
  )
}