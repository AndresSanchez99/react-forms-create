import React from 'react';
import './field-product.style.css';

const FieldsProducts = () => {
    return (
        
        <div className="field-product-container">
            
                   <div className="field-container">Nombre Producto</div>
                   <div className="field-container">Nombre Cliente </div> 
                   <div className="field-container">No. Documento</div>  
                   <div className="field-container">Precio Venta</div> 
               
        </div>
    );
    
}

export default FieldsProducts;