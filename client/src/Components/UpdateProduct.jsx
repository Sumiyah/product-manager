import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const UpdateProduct = props => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [desc, setDesc] = useState("")
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${props._id}`)
      .then(res => {
        console.log("RESPONSE in Update:", res);
        setTitle(res.data.product.title)
        setPrice(res.data.product.price)
        setDesc(res.data.product.desc)
      })
      .catch(err => console.log(err))
  }, [props._id])

  const changeProduct = e => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/products/update/${props._id}`, {

      title,
      price,
      desc
    })
      .then(res => {
        console.log(res)
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate(`/products/${props._id}`);
        }
      })
      .catch(err => console.log("Error: ", err))
  }


  return (
    <div>
      <h3>Product Manager - Edit This Product!!</h3>
      <form onSubmit={changeProduct}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" value={title} name="title" className="form-control" onChange={e => setTitle(e.target.value)} />
          <p className="text-danger">{errors.title ? errors.title.message : ""}</p>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" min='0' step="0.1" value={price} name="price" className="form-control" onChange={e => setPrice(e.target.value)} />
          <p className="text-danger">{errors.price ? errors.price.message : ""}</p>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" name="desc" value={desc} className="form-control" onChange={e => setDesc(e.target.value)} />
          <p className="text-danger">{errors.desc ? errors.desc.message : ""}</p>
        </div>
        <input type="submit" value="Update" className="btn btn-success  mr-3" />
        <Link to={'/products'} className="btn btn-secondary" >Cancel</Link>
      </form>
    </div>
  )
}

export default UpdateProduct
