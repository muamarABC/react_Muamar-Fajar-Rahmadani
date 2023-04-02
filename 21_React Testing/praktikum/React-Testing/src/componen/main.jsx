import React, { useState } from 'react';
import bs from '../assets/icon.png';
import data from '../data.json';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';


function CreateProduct() {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productFreshness, setProductFreshness] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [product, setProduct] = useState([]);
  const [error, setError] = useState('');
  const [language, setLanguage] = useState("english");
  const [file, setFile] = useState(null);

  const [productNameError, setProductNameError] = useState(false);
  const [productImageError, setProductImageError] = useState(false);
  const [productDescriptionError, setProductDescriptionError] = useState(false);
  const [productPriceError, setProductPriceError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

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
    const regex = /^[a-zA-Z0-9\s]{0,10}$/;
    const inputName = e.target.value;
    if (regex.test(inputName)) {
      setProductName(inputName);
    } else {
      alert('Harus Huruf dan Tidak Lebih dari 10');
      e.target.value = '';
    }
  };

  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value)
    if (e.target.value === '') {
      setErrorMessage('Pilih salah satu opsi');
    } else {
      setErrorMessage('');
    }
  }

  const handleFresshnesChange = (e) => {
    setProductFreshness(e.target.value);
    if (e.target.value === '') {
      setErrorMessage('Pilih salah satu opsi');
    } else {
      setErrorMessage('');
    }
  }

  const handleUploadChange = (e) => {
    const file = e.target.files[0];
    const regex = /jpeg|jpg|png/;
    if (regex.test(file.type)) {
      setFile(file);
    } else {
      alert('Upload Format JPG atau PNG!');
      setErrorMsg("Upload Format JPG atau PNG!")
      e.target.value = null;
    }
  };

  const handlePriceProductChange = (e) => {
    const regex = /^[0-9]+(\.[0-9]{1,2})?$/;
    if(regex.test(e.target.value)){
        setProductPrice(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      category: productCategory,
      Image : file,
      freshness: productFreshness,
      description: productDescription,
      price: productPrice,
    };

    if (productName === ""){
      setProductNameError(true);
    }
    
    if (file === null){
      setProductImageError(true);
    }
   
    if (productDescription === "") {
      setProductDescriptionError(true);
    }
    if (productPrice === ""){
      setProductPriceError(true);
    }
    if (productCategory === ''){
      setErrorMessage("Pilih Salah Satu");
      return;
    }
    if (productFreshness === ''){
      setErrorMessage("Pilih Salah satu Opsi");
      return;
    }
    setProduct([...product, newProduct]);
    setProductName("");
    setFile("");
    setProductImage("");
    setProductCategory("");
    setProductFreshness('');
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

  console.log(product);
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

          <Form.Select aria-label="Default select example"
            value={productCategory}
            className={errorMessage ? "form-control border border-danger" : "form-control"}
            onChange={handleProductCategoryChange}
            name="productCategory"
            id="ProductCategory">
              <option value=''>Choose...</option>
              <option value='Fashion'>Fashion</option>
              <option value='Elektronik'>Elektronik</option>
              <option value='Makanan'>Makanan</option>
            </Form.Select>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

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
              onChange={handleUploadChange}
              name="uploadFile"/>
              {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
          {productImageError && <span className='error-message text-danger'>Product Category is Required</span>}
        </div>
        <p>{language === "english" ? data.productFreshness.en : data.productFreshness.id}</p>
        <div className="form-check">
          <input
            className="form-check-input"
            onChange={handleFresshnesChange}
            type="radio"
            name="btnRadio"
            value="Brand New"
            id="Radio"
            checked={productFreshness === "Brand New"}
          />
          Brand New
          <br />
          <input
            className="form-check-input"
            onChange={handleFresshnesChange}
            type="radio"
            name="btnRadio"
            value="Second Hand"
            id="Radio"
            checked={productFreshness === "Second Hand"}
          />
          Second Hand
          <br />
          <input
            className="form-check-input"
            onChange={handleFresshnesChange}
            type="radio"
            name="btnRadio"
            value="Refufbhised"
            id="Radio"
            checked={productFreshness === "Refufbhised"}
          />
        Refufbhised
        <br />
        </div>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
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
        {productDescriptionError && <span className='error-message text-danger'>Product Description is Required</span>}
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
            onChange={handlePriceProductChange}
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
            <th>Product Image</th>
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
                <td>{<img src={URL.createObjectURL(product.Image)} alt="Preview" width="200" />}</td>
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
