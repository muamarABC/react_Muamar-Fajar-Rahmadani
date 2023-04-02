import React from "react";
import {useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { deleteProduct } from '../store/ProductSlice';

function list () {
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteProduct({id: id}));
    }
    return (
    <div className="container">
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
    )
}

export default list;