import React from 'react'
import bs from '../gambar/bs.png'

export default function main(){
    return (<>
      <div className='container'>
        <div className="row">
            <div className="col-md-8">
              {/* Penambahan icon dan diotimalisasi dengan style */}
              <img
                src={bs}
              />
              <h1 style={{ textAlign: "center" }}>Create Product</h1>
              <p
              >
                Create Your Produt For Sell in Our Website, Please write correcctly
                and according to the existing conditions. I hope your item sells
                quickly, We're Happy to Help You : )
              </p>
            </div>
            <form
              className="Create-Product"
              onsubmit="return Validasi()"
              name="dataProduct"
            >
            <div className="form-group">
            {/* Membuat Form Product name dan Label */}
              <label htmlFor="productName">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="productName"
                  id="productName"
                  placeholder="Input Product Name..."
                />
            </div>
            <div className="form-group">
            {/* Membuat Form Product Category */}
              <label htmlFor="ProductCategory">Product Category</label>
              <select
                className="form-control"
                name="ProductCategory"
                id="ProductCategory"
                value="ProductCategory"
              >
                <option>Fashion</option>
                <option>Elektronik</option>
                <option>Makanan</option>
              </select>
            </div>
              <div className="col-6 position-relative">
                {/* Membuat form untuk Upload image */}
                <label className="form-label fw-semibold" htmlFor="uploadFile">
                 Image of product
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="uploadFile"
                  name="uploadFile"
                />
              </div>
              <p>Product Freshness</p>
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
                  <label htmlFor="Description">Description</label>
                  <textarea
                    className="form-control mb-3"
                    name="Description"
                    id="Description"
                    rows={3}
                    defaultValue={""}
                  />
                  <p id="Limit" />
                  <label>Product price</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      name="Price"
                      id="Price"
                    />
                    <div className="input-group-append"></div>
                  </div>
                  {/* Membuat Button Submit */}
                  <button
                    type="button"
                    onclick="inputdata()"
                    className="btn btn-primary"
                    style={{ marginLeft: "50%" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
    </>
    )
}