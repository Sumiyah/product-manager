import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';


const ProductsList = props => {

  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(res => {
        console.log("RESPONSE:", res);
        setProducts(res.data.product)
      })
      .catch(err => console.log("Error: ", err))
  }, [])

  return (
    <div>
      <h3>The List of Product You Added:</h3>
      <Link to={'/api/products/new'} className="btn btn-success">Add new Product</Link>
      <ul className="list-group" >
        {
          products.map((product, i) =>
            <li key={i} className="list-group-item">
              <Link to={`/api/products/${product._id}`}><span>{product.title}</span></Link>
            </li>
          )
        }
      </ul>

    </div>
  )
}

export default ProductsList
