import React from 'react';
import './service.style.css';

const ServicePage = (props) => {
    return (
        
        <div className="service-container">
          {props.servicename}
        </div>
    );
    
}

export default ServicePage;