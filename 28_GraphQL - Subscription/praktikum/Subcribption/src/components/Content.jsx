import React, { useState, useEffect } from 'react'
import logo from '../assets/icon.png'
import data from '../file.json'
import axios from 'axios';

export default function Content() {
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productFreshness, setProductFreshness] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [language, setLanguage] = useState("english")

    const [products, setProducts] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});

    const handleLanguage = () => {
        if (language == "english"){
            setLanguage("indonesian")
        } else {
            setLanguage("english");
        }
    }

    const handleClick = (e) => {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log({randomNumber});
        e.preventDefault();
    }

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(
            'https://642c5d44d7081590f938a32d.mockapi.io/products/products',
            {
              productName: productName,
              productCategory: productCategory,
              productFreshness: productFreshness,
              productPrice: productPrice,
            }
          );
          alert('Product created successfully');
          setProductName('');
          setProductCategory('');
          setProductFreshness('');
          setProductPrice('');
          setProducts([...products, response.data]);
        } catch (error) {
          alert('Failed to create product');
        }

        useEffect(() => {
            axios
              .get('https://642c5d44d7081590f938a32d.mockapi.io/products/products')
              .then((response) => setProducts(response.data));
          }, []);
      };

      const handleUpdate = async (e) => {
        e.preventDefault();
        try {
          await axios.put(`https://642c5d44d7081590f938a32d.mockapi.io/products/products/${currentProduct.id}`, {
            productName: productName,
            productCategory: productCategory,
            productFreshness: productFreshness,
            productPrice: productPrice,
          });
          alert('Product updated successfully');
          setEditing(false);
          setProductName('');
          setProductCategory('');
          setProductFreshness('');
          setProductPrice('');
          setProducts(products.map((product) => (product.id === currentProduct.id ? { ...product, productName, productCategory, productFreshness, productPrice } : product)));
        } catch (error) {
          alert('Failed to update product');
        }
      };
    
    const handleEdit = (product) => {
        setEditing(true);
        setCurrentProduct(product);
        setProductName(product.productName);
        setProductCategory(product.productCategory);
        setProductFreshness(product.productFreshness);
        setProductPrice(product.productPrice);
      };
    
    const handleDelete = async (id) => {
        try {
          await axios.delete(`https://642c5d44d7081590f938a32d.mockapi.io/products/products/${id}`);
          alert('Product deleted successfully');
          setProducts(products.filter((product) => product.id !== id));
        } catch (error) {
          alert('Failed to delete product');
        }
    };

    useEffect(() => {
      axios
        .get('https://642c5d44d7081590f938a32d.mockapi.io/products/products')
        .then((response) => setProducts(response.data));
      }, []);
    
  return (
    <>
    <div className="container my-5">
        <div className="">
            <div className="col-md-6 offset-md-3">
                <div className='text-center'>
                    <img src={logo} style={{width: "20%"}}/>
                    <h2 className='text-center'>{language === "english" ? data.title.en : data.title.id }</h2>
                    <p className='text-center'>{language === "english" ? data.description.en : data.description.id}</p>
                    <div className='text-center'>
                        <button 
                            onClick={handleLanguage}
                            className="btn btn-info center-block alert alert-info mt-5 w-50">
                            {language === "english" ? "Bahasa Indonesian" : "Bahasa Inggris"}
                        </button>
                        <button 
                            type='generate' 
                            onClick={handleClick}
                            className="btn btn-success center-block alert alert-success mt-5 w-50"
                            >Generate Number
                        </button>
                    </div>
                    <h2 style={{textAlign: "center"}}>Detail Product</h2>
                </div>
                <form className="create-product" onSubmit={handleSubmit}>
                <div className="form-group my-3">
                    <label htmlFor="productName">Product Name</label>
                    <input 
                        value={productName} 
                        onChange={(e) => setProductName(e.target.value)}
                        type="text" 
                        className="form-control"
                        id="productName" 
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="">Product Category</label>
                    <select
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="form-control"
                    id="productCategory">
                    <option>Choose...</option>
                    <option value="fashion">Fashion</option>
                    <option value="beauty">Beauty</option>
                    </select>
                </div>
                <div className="row my-3" id="prodFres">
                    <p>Product Freshness</p>
                    <div className="form-check">
                        <input
                            className="form-control form-check-input"
                            type="radio"
                            defaultValue="Brand New"
                            name="btnRadio"
                            id="Radio1"
                            onChange={(e) => setProductFreshness(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="Radio1">
                            Brand New
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-control form-check-input form-control"
                            type="radio"
                            defaultValue="Second Hand"
                            name="btnRadio"
                            id="Radio2"
                            onChange={(e) => setProductFreshness(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="Radio2">
                            Second Hand
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-control form-check-input"
                            type="radio"
                            defaultValue="Refufbhised"
                            name="btnRadio"
                            id="Radio3"
                            onChange={(e) => setProductFreshness(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="Radio3">
                            Refufbhised
                        </label>
                    </div>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="productPrice">Product Price</label>
                    <input 
                        type="number" 
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        className = "form-control form-control"
                        id="productPrice" 
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary center-block alert alert-primary"
                    style={{ width: 400, marginLeft: "12%", marginTop: 50 }}
                >
                    Submit
                </button>
                </form>
            </div>
        </div>
        <table className="table table-collapse">
            <thead>
                <tr className='w-75'>
                <th id="no">No</th>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Product Freshness</th>
                {/* <th>Image</th> */}
                <th>Product Price</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.productCategory}</td>
                <td>{product.productFreshness}</td>
                {/* <td><img src={URL.createObjectURL(product.productImage)} width={100} /></td> */}
                <td>{product.productPrice}</td>
                <td>
                <button className='btn btn-danger' onClick={() => handleDelete(product.id)}>Delete</button>
                <button className='btn btn-success' onClick={handleEdit}>Edit</button>
                </td>
                </tr>
                ))}
            </tbody>
        </table>
        <div>
            <div className="col-xs-3">
                <input
                    type="text"
                    className="form-control"
                    id="Search"
                    placeholder="Search by Product Name"
                />
                </div>
                <div className="btn-group" style={{marginTop: "10px"}}>
                <button type="button" className="btn btn-primary">
                    Deletion
                </button>
                <button type="button" className="btn btn-outline-primary">
                    Search
                </button>
            </div>
        </div>
      </div>
    </>
  )
}
