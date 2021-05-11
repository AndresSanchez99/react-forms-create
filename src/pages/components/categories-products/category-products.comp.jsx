import React from 'react';
import './category-product.style.css';

const CategoryProduct = (props) => {
    return (
        
        <div className="service-container">
          {props.categoryname}
        </div>
    );
    
}

export default CategoryProduct;