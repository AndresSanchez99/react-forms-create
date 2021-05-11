import React from 'react';
import './products.style.css';

const Products = (props) => {

  return (


    <div className="product-container">

      <div className="products-container">{props.product.nameproduct}</div>
      <div className="products-container">{props.product.nameclientproduct}</div>
      <div className="products-container">{props.product.document}</div>
      <div className="products-container"> ${props.product.price}</div>

    </div>

  );

}

export default Products;