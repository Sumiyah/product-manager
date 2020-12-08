import React, { useState } from 'react'
import axios from 'axios'

const ProductsForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [desc , setDesc] = useState("")

    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            desc
        })
        .then(res => console.log("respone:  ", res))
        .catch(err => console.log("Error: ", err))
    }

    return (
        <div>
            <h3>Product Manager</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" className="form-control" onChange={e=> setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" min='0' name="price" className="form-control" onChange={e=> setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="desc" className="form-control" onChange={e=> setDesc(e.target.value)} />
                </div>
                <input type="submit" value="Create" className="btn btn-danger"/>
            </form>
            
        </div>
    )
}

export default ProductsForm
