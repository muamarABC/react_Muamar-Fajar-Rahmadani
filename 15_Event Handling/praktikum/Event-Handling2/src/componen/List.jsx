import React,{useState} from 'react'
import Table from 'react-bootstrap/Table';

export default function List(data) {
  return (
    <>
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
        <tr>
          <td>{1001}</td>
          <td>Baju</td>
          <td>Fashion</td>
          <td>Brand New</td>
          <td>Good</td>
          <td>1</td>
          <td>
            <button className='btn btn-danger'>Delete</button>
            <button className='btn btn-success'>Edit</button>
          </td>
        </tr>
      </tbody>
    </Table>
    
      
    </>
  )
}
