import React, { useState } from 'react';
import bs from '../assets/icon.png';
import data from '../data.json';
import Table from 'react-bootstrap/Table';


function CreateProduct() {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState("");
  const [productFreshness, setProductFreshness] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [product, setProduct] = useState([]);
  const [error, setError] = useState('');
  const [language, setLanguage] = useState("english")

  const [productNameError, setProductNameError] = useState(false);
  const [productCategoryError, setProductCategoryError] = useState(false);
  const [productImageError, setProductImageError] = useState(false);
  const [productDescriptionError, setProductDescriptionError] = useState(false);
  const [productPriceError, setProductPriceError] = useState(false);


  const handleLanguage = () => {
    if (language == "english"){
        setLanguage("indonesia");
    } else {
        setLanguage("english");
    }
  }

  const handleClick = (e) => {
    const Number = Math.random() * 10;
    console.log({Number});
    e.preventDefault();
  }

  const handleProductNameChange = (e) => {
    const value = e.target.value;
    if(value.length <= 10){
      setProductName(value);
      setProductNameError(value === "");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      category: productCategory,
      freshness: productFreshness,
      description: productDescription,
      price: productPrice,
    };

    if (productName === "" && productCategory === "" && productImage === "" && productDescription === "" && productPrice === ""){
      setProductNameError(true);
      setProductCategoryError(true);
      setProductImageError(true);
      setProductDescriptionError(true);
      setProductPriceError(true);
    }

    setProduct([...product, newProduct]);
    setProductName("");
    setProductCategory("");
    setProductFreshness("");
    setProductDescription("");
    setProductPrice("");
  };
  const handleDelete = (index) => {
    const Confirm = window.confirm("Are you sure you want to delete this product?");
    if(Confirm){
      const newProduct = [...product];
      newProduct.splice(index, 1);
      setProduct(newProduct);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='text-center'>
          <img src={bs} style={{width: "20%"}}/>
            <h2 className='text-center'>{language === "english" ? data.title.en : data.title.id}</h2>
            <p className='text-center'>{language === "english" ? data.description.en : data.description.id}</p>
            <button 
              onClick={handleLanguage}
              className="btn btn-info alert alert-info "
              >{language === "english" ? "Bahasa Indonesia" : "Bahasa Inggris"}
            </button>
            <button
                type='generate' 
                onClick={handleClick}
                className="btn btn-success alert alert-success "
              >Generate Number
              </button>
        </div>
        <h2 style={{textAlign: "center"}}>Detail Product</h2>
      </div>
      <form 
        className="Create-Product"
        onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">{language === "english" ? data.NameProduct.en : data.NameProduct.id}</label>
          <input
            type="text"
            value={productName}
            className={productNameError ? "form-control border border-danger" : "form-control"}
            onChange={handleProductNameChange}
            id="productName"
            placeholder="Input Product Name..."/>
            {productNameError && <span className='error-message text-danger'>Product Name is Required</span>}
        </div>
        <div className="form-group">
          {/* Membuat Form Product Category */}
          <label htmlFor="ProductCategory">{language === "english" ? data.CategoryProduct.en : data.CategoryProduct.id}</label>
          <select
            value={productCategory}
            className={productCategoryError ? "form-control border border-danger" : "form-control"}
            onChange={(e) => setProductCategory(e.target.value)}
            name="productCategory"
            id="ProductCategory">
              <option>Fashion</option>
              <option>Elektronik</option>
              <option>Makanan</option>
            </select>
            {productCategoryError && <span className='error-message text-danger'>Product Category is Not Chooice</span>}
        </div>
        <div className="form-upload col-5"> 
        {/* Membuat form untuk Upload image */}
          <label className="form-label fw-semibold" htmlFor="uploadFile">
          {language === "english" ? data.imageProduct.en : data.imageProduct.id}
          </label>
           <input
              type="file"
              value={productImage}
              className={productImageError ? "form-control border border-danger":"form-control"}
              id="uploadFile"
              onChange={(e) => setProductImage(e.target.value)}
              name="uploadFile"/>
          {productImageError && <span className='error-message text-danger'>Product Category is Required</span>}
        </div>
        <p>{language === "english" ? data.productFreshness.en : data.productFreshness.id}</p>
        <div className="form-check">
          <input
            className="form-check-input"
            onChange={(e) => setProductFreshness(e.target.value)}
            type="radio"
            name="btnRadio"
            defaultValue="Brand New"
            id="Radio"
          />
          Brand New
          <br />
          <input
            className="form-check-input"
            onChange={(e) => setProductFreshness(e.target.value)}
            type="radio"
            name="btnRadio"
            defaultValue="Second Hand"
            id="Radio"
          />
          Second Hand
          <br />
          <input
            className="form-check-input"
            onChange={(e) => setProductFreshness(e.target.value)}
            type="radio"
            name="btnRadio"
            defaultValue="Refufbhised"
            id="Radio"
          />
        Refufbhised
        <br />
        </div>
        <div className="form-group">
        {/* Membuat input deskrisi */}
        <label htmlFor="Description">{language === "english" ? data.Description.en : data.Description.id}</label>
        <textarea
        className={productDescriptionError ? "form-control mb-3 border border-danger" : "form-control"}
        value={productDescription}
        name="Description"
        id="Description"
        onChange={(e) => setProductDescription(e.target.value)}
        rows={3}
        defaultValue={""}>
        </textarea>
        </div>
        {/*Product Price*/}
        <label>{language === "english" ? data.Price.en : data.Price.id}</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            value={productPrice}
            type="number"
            className={productPriceError ? "form-control border border-danger" : "form-control"}
            onChange={(e) => setProductPrice(e.target.value)}
            aria-label="Amount (to the nearest dollar)"
            name="Price"
            id="Price"
          />
          {productPriceError && <span className='error-message text-danger'>Product Price is Required</span>}
        </div>

        {error && <p>{error}</p>}
        <button 
          type="submit"
          className="btn btn-primary center-block alert alert-primary"
          style={{width: 300, marginTop:50, textAlign:"center" }}>
          Submit</button>
      </form>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Additional Description</th>
            <th>Product Price</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody>
            {product.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.freshness}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                   <button className='btn btn-danger'
                   onClick={handleDelete}>Delete</button>
                  <button className='btn btn-success'
                  >Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
    </Table>
  </div>
  );
}

export default CreateProduct;
