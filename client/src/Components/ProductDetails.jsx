import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router'

const ProductDetails = props => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${props._id}`)
      .then(res => {
        console.log("RESPONSE in DETAILS:", res);
        setProducts(res.data.product)
      })
      .catch(err => console.log(err))
  }, [props._id])

  const deleteThisItem = (productID) => {
    axios.delete(`http://localhost:8000/api/products/delete/${productID}`)
      .then(response => {
        console.log(response)
        navigate(`/products/`)
      })
  }

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h3>{products.title} </h3>
        </div>
        <div className="card-body">
          <p>Price: {products.price}</p>
          <p>Description: {products.desc}</p>
        </div>
        <div className="card-footer">
          <Link to={'/products'} className="btn btn-primary mr-3">Go back!</Link>
          <Link to={`/products/update/${props._id}`} className="mr-3 btn btn-info">Edit</Link>
          <button to={`/products/delete/${props._id}`} onClick={() => { deleteThisItem(products._id) }} className="btn btn-danger">remove</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
