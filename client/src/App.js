// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
// import { useEffect, useState } from 'react';
import './App.css';
import ProductsForm from './Components/ProductsForm';
import ProductsList from './Components/ProductsList';
import ProductDetails from './Components/ProductDetails';

function App() {
  
  return (
    <div className="container mt-5">
      <Router>
        <ProductsForm path="/api/products/new"/>
        <ProductsList path="/api/products/" />
        <ProductDetails path="/api/products/:_id"/>
      </Router>
    </div>
  );
}

export default App;
