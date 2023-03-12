<>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
    crossOrigin="anonymous"
  />
  <title>Create Product</title>
  {/* Navbar Bootstrap */}
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow -lg fixed top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        FajarJaya
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
      <div className="collapse navbar-collapse text-right" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#layanan">
              Layanan
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container">
    <div className="row">
      
      <div className="col-md-8">
        {/* Penambahan icon dan diotimalisasi dengan style */}
        <img
          src="gambar/bs.png"
          style={{
            width: "15%",
            marginTop: "8%",
            marginLeft: "42%",
            marginBottom: "5%"
          }}
        />
        <h1 style={{ textAlign: "center" }}>Create Product</h1>
        <p
          style={{
            fontFamily:
              '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
            fontSize: 20,
            marginTop: "5%",
            marginBottom: "5%"
          }}
        >
          Create Your Produt For Sell in Our Website, Please write correcctly
          and according to the existing conditions. I hope your item sells
          quickly, We're Happy to Help You : )
        </p>
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
    <div className="row" style={{ marginTop: "5%" }}>
      <table className="table" id="databel">
        <thead>
          <tr>
            {/* Untuk Membuat Head dari Table */}
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Image Of Product</th>
            <th scope="col">Product Freshness</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
      </table>
    </div>
    <div className="col-md-2">
      {/* Untuk Membuat Form Search by name */}
      <input
        type="text"
        className="form-control"
        id="Search"
        placeholder="Search by Name"
      />
    </div>
    <div className="btn-group" style={{ marginTop: "1%" }}>
      {/* Untuk membuat button delete dan search */}
      <button
        type="button"
        onclick="DeleteData()"
        className="btn btn-primary"
        id="delete-button"
        style={{ width: "100%" }}
      >
        Deletion
      </button>
      <button
        type="submit"
        className="btn btn-outline-primary"
        id="search-button"
        style={{ width: "100%" }}
      >
        Search
      </button>
    </div>
  </div>
  {/* Optional JavaScript */}
  {/* jQuery first, then Popper.js, then Bootstrap JS */}
</>
