import React from 'react'

export default function footer(){
    return(<>
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
    <div className="form-search">
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

    </>)
}