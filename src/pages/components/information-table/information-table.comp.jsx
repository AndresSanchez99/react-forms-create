import React from 'react';
import './information-table.style.css';

import SearchBar from '../search-bar/search-bar.comp';
import ServicePage from '../services/services.comp';
import Clients from '../clients/clients.comp';
import FieldsRepairs from '../field/fields-repairs.comp';
import CategoryProduct from '../categories-products/category-products.comp';
import FieldsProducts from '../field/fields-products.comp';
import Products from '../products/products.comp';


const InformationPage = (props) => {
    
   // console.log({props});
    
    return ( 
        <div className="information-table-container">
            
          
                      <SearchBar />
                     <hr/>
                        <h4>Reparaciones</h4>
                        {props.serviceslist.map((service, index) => {
                            return (

                                <React.Fragment key={service.id} >
                                    <ServicePage servicename={service.name} />
                                    <FieldsRepairs/>
                                    {service.clients.map((client, indexClient) => {
                                        return (
                                            <Clients
                                             key={client.id}
                                             client={client} />
                                        );
                                    })}
                                </React.Fragment>

                            );

                        })}
                     
                   
                   <h4>Venta de Productos</h4> 
                  {props.saleproductslist.map((category,index)=>{
                      return(
                        <React.Fragment key={category.id} >
                          <CategoryProduct categoryname={category.name}/>
                          <FieldsProducts/>
                          {category.clientsprd.map((product,indexClientprod)=>{
                              return(
                                  <Products
                                  key={product.id}
                                  product = {product}
                                  />
                              );

                          })}
                          </React.Fragment>
                      );

                  })}
                  
        </div>
    );
   
}

export default InformationPage;