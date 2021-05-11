import React from 'react';
import './clients.style.css';
const Clients = (props) => {

    return (


        <div className="client-container">


            <div className="client-style">
                {props.client.name}
            </div>
            <div className="client-style">
                {props.client.document}
            </div>
            <div className="client-style">
                {
                    props.client.done === "Pendiente"
                        ?
                        <span className="service-not">{props.client.done} </span>
                        :
                        <span>{props.client.done} </span>

                }</div>

        </div>

    );

}

export default Clients;