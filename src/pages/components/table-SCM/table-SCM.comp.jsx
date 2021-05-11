import React from 'react';
import FormClients from '../Form-clients/form-clients.comp';
import InformationPage from '../information-table/information-table.comp';
import './table-SCM.style.css';

const TableSCM = (props) => {
   
    return (
        
        <div className="table-SCM-container">
             <h2>LISTAS </h2>
         
      
        <InformationPage 
            serviceslist= {props.serviceslist}
            saleproductslist={props.saleproductslist}
            />
         <FormClients
           onAddService={props.onAddService}
           onAddSale={props.onAddSale}
          />
        </div>
    
       
    );
    
}

export default TableSCM;