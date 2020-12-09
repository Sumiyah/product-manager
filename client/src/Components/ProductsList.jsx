import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';



const ProductsList = () => {

  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts()
  }, [])

  function getProducts() {
    axios.get('http://localhost:8000/api/products')
      .then(res => {
        console.log("RESPONSE:", res);
        setProducts(res.data.product)
      })
      .catch(err => console.log("Error: ", err))

  }

  const deleteThisItem = (productID) => {
    axios.delete(`http://localhost:8000/api/products/delete/${productID}`)
      .then(response => {
        console.log(response)
        getProducts()

      })
  }

  return (
    <div>
      <div class="row mb-5">
        <div class="col-sm-8"><h3>The List of Products You Added:</h3></div>
        <div class="col-sm-4"><Link to={'/products/new'} className="btn btn-success">Add new Product</Link></div>
      </div>
      <div className=" justify-content-around ">

        <ul className="list-group" >
          {
            products.map((product, i) =>
              <li key={i} className="p-2 list-group-item  ">
                <div className="row">

                  <Link to={`/products/${product._id}`} className="col-sm-8"><span>{product.title}</span></Link>
                  <div className="col-sm-2">

                    <button className=" btn btn-outline-danger btn-sm align-self-end " onClick={() => { deleteThisItem(product._id) }}>Remove</button>
                  </div>
                </div>
              </li>
            )
          }
        </ul>
      </div>

    </div>
  )
}

export default ProductsList
