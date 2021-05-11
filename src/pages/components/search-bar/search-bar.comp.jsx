import React from 'react';
import './search-bar.styles.css';

const SearchBar = () => {
    return (

        <div className="search-bar-container">
            <div className="Searchbar-input">
                <h5>Buscar en Reparaciones</h5>
                <input type="text" placeholder="Buscar por nombre" />
                <input type="radio" name='choice' /> Reparaciones
            <input type="radio" name='choice' /> Servicio Realizado
            <input type="radio" name='choice' /> Servicio Pendiente

            </div>
           
            <div>
                <h5>Buscar en venta de productos</h5>
                <input type="text" placeholder="Buscar por nombre" />
                <input type="number" placeholder="Buscar precio" />
               
</div>
        </div>
    );

}

export default SearchBar;