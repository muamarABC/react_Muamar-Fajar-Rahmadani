import React,{useState} from 'react'
import bs from '../assets/icon.png'
import data from '../data.json'
// import List from "./List";

export default function main(){
  const [product, setProduct] = useState([]);
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState("");
  const [productFreshness, setProductFreshness] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  
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

  const handleChangeProductName = (e) => {
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

    return (<>
      <div className='container'>
        <div className="row">
            <div className="text-center">
              <img src={bs} style={{width: "20%"}}/>
              <h2 className='text-center'>{language === "english" ? data.title.en : data.title.id}</h2>
              <p className='text-center'>{language === "english" ? data.description.en : data.description.id}</p>
              <div className="text-center">
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
              onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
            {/* Membuat Form Product name dan Label */}
              <label htmlFor="productName">{language === "english" ? data.NameProduct.en : data.NameProduct.id}</label>
                <input
                  type="text"
                  value={productName}
                  className={productNameError ? "form-control border border-danger" : "form-control"}
                  onChange={handleChangeProductName}
                  id="productName"
                  placeholder="Input Product Name..."
                />
                {productNameError && <span className='error-message text-danger'>Product Name is Required</span>}
            </div>

            <div className="form-group">
            {/* Membuat Form Product Category */}
              <label htmlFor="ProductCategory">{language === "english" ? data.CategoryProduct.en : data.CategoryProduct.id}</label>
              <select
                value={productCategory}
                className={productCategoryError ? "form-control border border-danger" : "form-control"}
                onChange={handleChangeProductCategory}
                name="productCategory"
                id="ProductCategory"
              >
                <option>Fashion</option>
                <option>Elektronik</option>
                <option>Makanan</option>
              </select>
              {productCategoryError && <span className='error-message text-danger'>Product Category is Not Chooice</span>}
            </div>

            <div className="form-upload col-5 ">
              {/* Membuat form untuk Upload image */}
              <label className="form-label fw-semibold" htmlFor="uploadFile">
              {language === "english" ? data.imageProduct.en : data.imageProduct.id}
              </label>
              <input
                type="file"
                value={productImage}
                className={productImageError ? "form-control border border-danger":"form-control"}
                id="uploadFile"
                onChange={handleChangeProductImage}
                name="uploadFile"
              />
              {productImageError && <span className='error-message text-danger'>Product Category is Required</span>}

            </div>
              <p>{language === "english" ? data.productFreshness.en : data.productFreshness.id}</p>
              {/* Membuat Button Radio Kondisi product */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="btnRadio"
                    defaultValue="Brand New"
                    id="Radio"
                  />
                  Brand New
                  <br />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="btnRadio"
                    defaultValue="Second Hand"
                    id="Radio"
                  />
                  Second Hand
                  <br />
                  <input
                    className="form-check-input"
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
                    // value={}
                    className={productDescriptionError ? "form-control mb-3 border border-danger" : "form-control"}
                    name="Description"
                    id="Description"
                    onChange={handleChangeProductDescription}
                    rows={3}
                    defaultValue={""}
                  />
                  {productDescriptionError && <span className='error-message text-danger'>Product Aditional Description is Required</span>}

                <div/>
                <p id="Limit" />
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
                      onChange={handleChangeProductPrice}
                      aria-label="Amount (to the nearest dollar)"
                      name="Price"
                      id="Price"
                    />
                    {productPriceError && <span className='error-message text-danger'>Product Price is Required</span>}
                  </div>
                  {/* Membuat Button Submit */}
                  <button
                    type="submit"
                    className="btn btn-primary center-block alert alert-primary"
                    style={{width: 300, marginTop:50, textAlign:"center" }}
                  >Submit

                  </button>
                  
                </div>
              </form>
            </div>
          </div>
          
    </>
    )
}