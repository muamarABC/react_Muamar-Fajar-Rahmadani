import React, { useState } from 'react'
import logo from '../assets/icon.png'
import data from '../file.json'

export default function Content() {

    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [language, setLanguage] = useState("english")
    const [productNameError, setProductNameError] = useState(false);
    const [productCategoryError, setProductCategoryError] = useState(false);
    const [productImageError, setProductImageError] = useState(false);
    const [productDescriptionError, setProductDescriptionError] = useState(false);
    const [productPriceError, setProductPriceError] = useState(false);

    const handleLanguage = () => {
        if (language == "english"){
            setLanguage("indonesian")
        } else {
            setLanguage("english");
        }
    }

    const handleChangeProductName = (e) => {
        const value = e.target.value;
        if(value.length <= 10){
            setProductName(value)
            setProductNameError(value === "");
        }
    }

    const handleChangeProductCategory = (e) => {
        const value = e.target.value;
        setProductCategory(value);
        
    }

    const handleChangeProductImage = (e) => {
        const value = e.target.value;
        setProductImage(value);
    }

    const handleChangeProductDescription = (e) => {
        const value = e.target.value;
        setProductDescription(value);
    }

    const handleChangeProductPrice = (e) => {
        const value = e.target.value;
        setProductPrice(value);
    }

    const handleClick = (e) => {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log({randomNumber});
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (productName === ""){
            setProductNameError(true)
        }

        if (productCategory === ""){
            setProductCategoryError(true)
        }

        if (productImage === ""){
            setProductImageError(true)
        }

        if (productDescription === ""){
            setProductDescriptionError(true)
        }

        if (productPrice === ""){
            setProductPriceError(true)
        }
      };

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
                <form className="create-product" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group my-3">
                    <label htmlFor="productName">Product Name</label>
                    <input 
                        value={productName} 
                        onChange={handleChangeProductName} 
                        type="text" 
                        className={productNameError ? "form-control border border-danger" : "form-control"}
                        id="productName" 
                    />
                    {productNameError && <span className='error-message text-danger'>Product Name is Required</span>}
                </div>
                <div className="form-group my-3">
                    <label htmlFor="">Product Category</label>
                    <select
                    value={productCategory}
                    onChange={handleChangeProductCategory}
                    className={productCategoryError ? "form-control border border-danger" : "form-control"}
                    id="productCategory">
                    <option>Choose...</option>
                    <option value="fashion">Fashion</option>
                    <option value="beauty">Beauty</option>
                    </select>
                    {productCategoryError && <span className='error-message text-danger'>Product Category is Required</span>}
                </div>
                <div className="row mt-2">
                    <div className="col-6 position-relative">
                    <label className="form-label fw-semibold" htmlFor="customFile">
                        Image of product
                    </label>
                    <input 
                        type="file" 
                        value={productImage}
                        onChange={handleChangeProductImage}
                        className={productImageError ? "form-control border border-danger" : "form-control"}
                        id="uploadFile" 
                    />
                    {productImageError && <span className='error-message text-danger'>Product Category is Required</span>}
                    </div>
                </div>
                <div className="row my-3" id="prodFres">
                    <p>Product Freshness</p>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        defaultValue="Brand New"
                        name="btnRadio"
                        id="Radio1"
                    />
                    <label className="form-check-label" htmlFor="Radio1">
                        Brand New
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        defaultValue="Second Hand"
                        name="btnRadio"
                        id="Radio2"
                    />
                    <label className="form-check-label" htmlFor="Radio2">
                        Second Hand
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        defaultValue="Refufbhised"
                        name="btnRadio"
                        id="Radio3"
                    />
                    <label className="form-check-label" htmlFor="Radio3">
                        Refufbhised
                    </label>
                    </div>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="description">Additional Description</label>
                    <textarea
                    value={productDescription}
                    onChange={handleChangeProductDescription}
                    className={productDescriptionError ? "form-control border border-danger" : "form-control"}
                    id="addDesc"
                    rows={3}
                    defaultValue={""}
                    />
                    {productDescriptionError && <span className='error-message text-danger'>Product Category is Required</span>}
                </div>
                <div className="form-group my-3">
                    <label htmlFor="productPrice">Product Price</label>
                    <input 
                        type="number" 
                        value={productPrice}
                        onChange={handleChangeProductPrice}
                        className={productPriceError ? "form-control border border-danger" : "form-control"}
                        id="productPrice" 
                    />
                    {productPriceError && <span className='error-message text-danger'>Product Category is Required</span>}
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
      </div>
    </>
  )
}
