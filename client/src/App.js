// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
// import { useEffect, useState } from 'react';
import './App.css';
import ProductsForm from './Components/ProductsForm';
import ProductsList from './Components/ProductsList';
import ProductDetails from './Components/ProductDetails';
import UpdateProduct from './Components/UpdateProduct';

function App() {
  
  return (
    <div className="container mt-5">
      <Router>
        <ProductsForm path="/products/new"/>
        <ProductsList path="/products/" />
        <ProductDetails path="/products/:_id"/>
        <UpdateProduct path="/products/update/:_id" />
      </Router>
    </div>
  );
}

export default App;
