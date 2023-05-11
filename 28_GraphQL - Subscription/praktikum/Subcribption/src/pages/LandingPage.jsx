import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../Main.css';
import Hero from '../assets/hero.png';
import a from '../assets/a.png';
import { gql, useQuery, useMutation } from "@apollo/client";

export default function LandingPage() {

    const getProductList = gql `
        query MyQuery{
            product{
            product_id
            productName
            productCategory
            productFreshness
            productPrice
            }
        }
    `;

    const SubscriptionProduct = gql`
    subscription MySubscription {
        product {
            product_id
            productName
            productCategory
            productFreshness
            productPrice
        }
    }
    `
    
    const updateProduct = gql `
    mutation MyMutation($product_id: Int!) {
        update_product_by_pk(pk_columns: {product_id: $product_id}, _set: {productName: "Jacket"}) {
          product_id
        }
      }
    `
    
    const [UpdateProduct, {loading: loadingUpdate}] = useMutation(updateProduct)

    
    // const {data, loading, error} = useQuery(getProductList);
    const {data, loading, error} = useSubscription(SubscriptionProduct)
    if(loading || loadingUpdate){
        <loadingSVG/>
    }

    if (error){
        console.log(error)
        return null
    }

    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const deleteProducts = gql `
      mutation MyMutation2($product_id: Int !) {
          delete_product_by_pk(product_id: $product_id) {
            product_id
          }
        }
      `
      const handleDelete = (product_id) => {
          if (window.confirm('Apa anda yakin ingin menghapus?')) {
              deleteProduct({ variables: { product_id: product_id } }).catch((err) => alert(err.message));
          }
      };
  
      const [deleteProduct] = useMutation(deleteProducts, {refetchQueries: [getProductList]})
      
  return (
    <> 
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand">Simple Header</a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a
                    className="btn btn-sm btn-hover nav-link"
                    aria-current="page"
                    href="#">
                    Home
                    </a>
                </li>
                <li className="nav-item">
                    <Link to="/create-product" className='text-decoration-none'>
                        <a className="nav-link" href="#">
                        Create Product
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className='text-decoration-none'>
                        <a className="nav-link" href="#">
                            Register
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className='text-decoration-none'>
                        <a className="nav-link" href="#">
                            Login
                        </a>
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        {/* main */}
        <main className="contents">
            <div className="row">
            <div className="content-wrapper">
                <div style={{ marginLeft: "auto", marginTop: "15rem" }}>
                <h1>Better Solutions For Your Business</h1>
                <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                    We are team of talented designers making website with Bootstrap
                </p>
                <button id="subStart" type="submit">
                    Get Started
                </button>
                <button id="subWatch" type="submit">
                    Watch Video
                </button>
                </div>
                <img className="img-landing" src={Hero} alt="" srcSet="" />
            </div>
            <h1>Product List</h1>
            <div className="form-group">
                <input
                type="text"
                className="form-control"
                placeholder="Search by Product Name"
                value={searchTerm}
                onChange={handleSearch}
                />
            </div>
            <div className='product' style={{padding:50}}>
            <div className="product-list d-flex">
            {data?.product
                .filter((product) =>
                product.productName.toLowerCase().includes(searchTerm.toLowerCase())
            ).map(product => (
                <div className="card h-100">
                <img src={product.image} alt={product.productName} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">Category: {product.productCategory}</p>
                  <p className="card-text">Freshness: {product.productFreshness}</p>
                  <p className="card-text">Price: {product.productPrice}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary" data-toggle="modal" data-target={`#productModal${product.id}`}>Detail View</button>
                  <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(product.product_id)}
                          >
                            Delete
                          </button>
                </div>
              </div>
                ))}
            </div>
            </div>
            <div className="content-two-wrapper">
                <h1>Join Our Newslatter</h1>
                <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                </p>
                <div className="content-join">
                <input type="text" />
                <br />
                <br />
                <button>Get Started</button>
                </div>
            </div>
            </div>
        </main>
        {/* footer */}
        <footer>
            <div className="grid-container">
            <div className="grid-item-one">
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
            <div className="grid-item-two">
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
            <div className="grid-item-three">
                <h2>Our Service</h2>
                <p>Web Design</p>
                <p>Web Development</p>
                <p>Product Management</p>
                <p>Marketing</p>
                <p>Graphic Design</p>
            </div>
            <div className="grid-item-four">
                <h2>Our Social Networks</h2>
                <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
                valies
                </p>
                <div className="crcl">
                <img src={a} alt="" />
                <img src={a} alt="" />
                <img src={a} alt="" />
                <img src={a} alt="" />
                <img src={a} alt="" />
                </div>
            </div>
            </div>
        </footer>
        <div className="footer-down">
            <p style={{ marginRight: "auto", marginLeft: 80 }}>
            © Copyright <b>Arsha</b>. All Rights Reserved
            </p>
            <p style={{ marginLeft: "auto", marginRight: 80 }}>
            Designed by BootstrapMade
            </p>
        </div>
    </>
  )
}
