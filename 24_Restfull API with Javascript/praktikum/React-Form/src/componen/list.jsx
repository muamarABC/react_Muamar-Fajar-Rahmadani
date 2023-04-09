import React ,{useState, useEffect} from "react";
import {useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { deleteProduct } from '../store/ProductSlice';
import { getProducts } from '../MockApi';
import axios from"axios";


function list () {
    const [columns, setColumns] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('https://642fcea0b289b1dec4ba6a89.mockapi.io/product')
        .then(res => {
            setColumns(Object.keys(res.data[0]))
            setRecords(res.data)
        })
    }, [])

    return (
    <div className="container">
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Id</th>
            <th>Product Name</th>
                <th>Product Category</th>
                {/* <th>Product Image</th> */}
                <th>Product Freshness</th>
                <th>Additional Description</th>
                <th>Product Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
                {records.map((d, i) => (
                <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.productName}</td>
                    <td>{d.productCategory}</td>
                    {/* <td>{<img src={URL.createObjectURL(product.Image)} alt="Preview" width="200" />}</td> */}
                    <td>{d.productFreshness}</td>
                    <td>{d.productDesc}</td>
                    <td>{d.productPrice}</td>
                    <td>
                    <button className='btn btn-danger'
                    onClick={e => handleSubmit(d.id)}
                    >Delete</button>
                    {/* <Link to={`/update/${d.id}`} className='btn btn-success'
                    >Edit</Link> */}
                    <button className='btn btn-success'> Edit</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </Table>
    </div>
    )
};

function handleSubmit(id){
    const conf = window.confirm("do you want to delete?");
    if(conf) {
        axios.delete(`https://642fcea0b289b1dec4ba6a89.mockapi.io/product/${id}`)
        .then(res => {
            alert('Data Sudah di deleted');
        }).catch(err => console.log(err))
    }
}

export default list;