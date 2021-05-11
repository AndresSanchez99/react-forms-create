import React, { useState } from 'react';
import './form-clients.style.css';

const FormClients = (props) => {

    const [service, setservice] = useState('');
    const [name, setname] = useState('');
    const [document, setdocument] = useState(0);
    const [done, setdone] = useState('');

    const AddService = (event) => {
        event.preventDefault();

        const newClient = {
            id: document,
            name: name,
            document: Number(document),
            done: done,
        };

        props.onAddService(newClient, service);


    }
    const [categoryproduct, setcategoryproduct] = useState('');
    const [nameproduct, setnameproduct] = useState('');
    const [nameclientproduct, setnameclientproduct] = useState('');
    const [documentproduct, setdocumentproduct] = useState(0);
    const [pricesale, setpricesale] = useState(0);

    const AddSale = (event) => {
        event.preventDefault();

        const newSale = {
            id: documentproduct,
            nameproduct: nameproduct,
            nameclientproduct: nameclientproduct,
            document: Number(documentproduct),
            price: parseFloat(pricesale),
        };
        props.onAddSale(newSale, categoryproduct);

    }

    return (



        <div className="form-client-container">

            <h2>FORMULARIOS DE INGRESO</h2>



            <h5>INGRESAR REPARACIONES</h5>

            <div>
                <form name="formularioReparaciones">
                    <label >Ingresar Servicio</label>
                    <select value={service} id="service"
                        onChange={(event) => {
                            setservice(event.target.value);
                        }}>
                        <option value=" "> Elige una opción</option>
                        <option value="S1"> Formateo de PC </option>
                        <option value="S2"> Instalación de juegos PC </option>
                        <option value="S3"> Diagnostico de Hardware y Software</option>
                        <option value="S4"> Mantenimiento preventivo y correctivo</option>
                    </select>
                    <label >Nombre cliente</label>
                    <input type="text"
                        value={name}
                        onChange={(event) => {
                            setname(event.target.value);
                        }} />
                    <label>Número documento</label>
                    <input type="number"
                        min="0"
                        name="document"
                        value={document}
                        onChange={(event) => {
                            setdocument(event.target.value);
                        }} />
                    <label>Servicio</label>
                    <select value={done}
                        onChange={(event) => {
                            setdone(event.target.value);
                        }}>
                        <option value=" "> Elige una opción </option>
                        <option value="Realizado"> Realizado </option>
                        <option value="Pendiente"> Pendiente </option>
                    </select>

                    <button onClick=
                        {
                            AddService}>
                        Registrar
                                 </button>

                </form>
            </div>
            <hr/>
            <div>
                <h5>INGRESAR VENTAS</h5>

                <form name="formularioVentas">
                   <label>Ingresar categoria producto</label> 
                        <select value={categoryproduct}
                        onChange={(event) => {
                            setcategoryproduct(event.target.value);
                        }}>
                        <option value=" "> Elige una opción</option>
                        <option value="SP1"> Portatiles </option>
                        <option value="SP2"> Consolas </option>
                        <option value="SP3"> PC de escritorio </option>
                        <option value="SP4">Accesorios </option>
                        <option value="SP5"> Juegos </option>
                    </select>
                 <label> Nombre producto vendido</label> 
                        <input type="text"
                        value={nameproduct}
                        onChange={(event) => {
                            setnameproduct(event.target.value);
                        }} />
                           <label>Nombre cliente</label> 
                        <input type="text"
                        value={nameclientproduct}
                        onChange={(event) => {
                            setnameclientproduct(event.target.value);
                        }} />
                 <label> Número documento</label> 
                        <input type="number"
                        min="0"
                        name="documentproduc"
                        value={documentproduct}
                        onChange={(event) => {
                            setdocumentproduct(event.target.value);
                        }} />

                   <label>Precio venta</label>
                        <input type="number"
                        min="0"
                        name="sale"
                        value={pricesale}
                        onChange={(event) => {
                            setpricesale(event.target.value);
                        }} />

                    <button onClick=
                        {
                            AddSale}>
                        Registrar Venta
         </button>

                </form>


            </div>

        </div>




    );

}

export default FormClients;