import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/style.css'
import a from'../assets/a.png'
import hero from'../assets/hero-img.png'

const First = () => {
    const navigate = useNavigate()
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Simple header
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end mt-3 "
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => navigate('/create')}>
                    Create Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header>
          <main className="conten">
            <div className="row1">
              <div className="conten-pertama">
                <h1>Better Solutions For Your Business</h1>
                <p>We are team of talented designers making website with Bootstrap</p>
                <button id="Start" type="submit" onClick={() => navigate('/create')}>
                  Get Started
                </button>
                <button id="Watch" type="submit">
                  Watch Video
                </button>
              </div>
              <div className="img-sc">
                <img src={hero} alt="" srcSet="" width={"130%"}/>
              </div>
            </div>
          </main>
        </header>
        <div className="row2">
          <div className="conten-kedua">
            <h2>Join Our Newsletter</h2>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster magna
            </p>
            <input type="text" className="Subs" placeholder=" " />
            <input className="Subs-btn" type="button" defaultValue="Subscribe" 
            onClick={() => navigate('/create')}/>
            <br />
            <br />
          </div>
        </div>
        <footer>
          <div className="footer-grid">
            <div className="grid1">
              <h2>ARSHA</h2>
              <p>A108 Adam Street New York, NY 535022 United States</p>
              <p>
                <b>Phone:</b>+1 5589 55488 55
              </p>
              <p></p>
              <p>
                <b>Email: </b>info@example.com
              </p>
              <p></p>
            </div>
            <div className="grid2">
              <h2>Useful Links</h2>
              <p>
                <a href="#">Home</a>
              </p>
              <p>
                <a href="#">About us</a>
              </p>
              <p>
                <a href="#">Services</a>
              </p>
              <p>
                <a href="#">Terms of Service</a>
              </p>
              <p>
                <a href="#">Privacy Policy</a>
              </p>
            </div>
            <div className="grid3">
              <h2>Our Service</h2>
              <p>Web Design</p>
              <p>Web Development</p>
              <p>Product Management</p>
              <p>Marketing</p>
              <p>Graphic Design</p>
            </div>
            <div className="grid4">
              <h2>Our Social Networks</h2>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
                valies
              </p>
              <div className="bulat">
                <img src={a} alt="" />
                <img src={a} alt="" />
                <img src={a} alt="" />
                <img src={a} alt="" />
                <img src={a} alt="" />
              </div>
            </div>
          </div>
        </footer>
        <div className="Copy">
          <p>
            © Copyright <b>Arsha</b>. All Rights Reserved
          </p>
          <p>Designed by BootstrapMade</p>
        </div>
      </>
      
    );
  };
  
  export default First;
  