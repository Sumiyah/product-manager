import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router'

const ProductDetails = props => {
    const [products, setProducts]= useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props._id}`)
        .then(res=> {
            console.log("RESPONSE in DETAILS:", res);
            setProducts(res.data.product)
        })
        .catch(err=>console.log(err))
    },[props._id])

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h3>{products.title} </h3>
                    <Link to={'/api/products'} className="btn btn-primary">Go back!</Link>
                </div>
                <div className="card-body">
                    <p>Price: {products.price}</p>
                    <p>Description: {products.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
