import React, { useState } from 'react';
import TableSCM from './components/table-SCM/table-SCM.comp';

const SCMPage = () => {
  
     
    let serviceslist = [
     
           {
        id: "S1",
        name: "Formateo de Pc",
        clients : [
            {
                id: "S1C1",
                name: "Julian Sanchez",
                document: "1053870573",
                done: "Pendiente"
            },
            {
                id: "S1C2",
                name: "Maira Villada",
                document: "1053869576",
                done: "Pendiente"
            },
            {
                id: "S1C3",
                name: "Camilo  Torres",
                document: "1053870458",
                done: "Pendiente"
            },
            {
                id: "S1C4",
                name: "Carlos Sanchez",
                document: "1053870576",
                done: "Pendiente"
            }
        ]
       },
       
       { 
        id: "S2",
        name: "Instalación juegos pc",
        clients : [
            {
                id: "S2C1",
                name: "Hector Sanchez",
                document: "1053870573",
                done: "Realizado"
            },
            {
                id: "S2C2",
                name: "Julian Fer Cano",
                document: "1053870577",
                done: "Realizado"
            },
            {
                id: "S2C3",
                name: "Julio H Sanchez",
                document: "1053870578",
                done: "Realizado"
            },
            {
                id: "S2C4",
                name: "Alex Fr Sanchez",
                document: "1053870574",
                done: "Realizado"
            }
        ]
       },
       { 
        id: "S3",
        name: "Diagnostico de Hardware y Software",
        clients : [
            {
                id: "S3C1",
                name: "Carlos Daniel Castro",
                document: "1053870574",
                done: "Realizado"
            },
            {
                id: "S3C2",
                name: "Francisco Elias Cano",
                document: "7506532478",
                done: "Pendiente"
            },
            {
                id: "S3C3",
                name: "Rosalba Villada",
                document: "1053870578",
                done: "Realizado"
            },
            {
                id: "S3C4",
                name: "Laura Jimenez",
                document: "1053870574",
                done: "Realizado"
            }
        ]
       }, 
       { 
        id: "S4",
        name: "Mantenimiento preventivo y correctivo",
        clients : [
            {
                id: "S4C1",
                name: "Consuelo Maria Cano",
                document: "30327958",
                done: "Realizado"
            },
            {
                id: "S4C2",
                name: "Adriana Ocampo",
                document: "30352152",
                done: "Pendiente"
            },
            {
                id: "S4C3",
                name: "Albert Sanchez",
                document: "1053870578",
                done: "Pendiente"
            },
            {
                id: "S4C4",
                name: "Carlos M Marin",
                document: "1053870456",
                done: "Realizado"
            }
        ]
       },         
         
        ];
      
        let saleproductslist = [
           
                {
                    id: "SP1",
                    name: "Portatiles",
                    clientsprd : [
                        {
                            id: "SP1C1",
                            nameproduct: "Hp 2Tb",
                            nameclientproduct: "Carlos Daniel Grisales",
                            document: "1053870579",
                            price: 1200000
                            
                        }
                    ]
                   },
                   
                   { 
                    id: "SP2",
                    name: "Consolas",
                    clientsprd : [
                        {
                            id: "SP2C1",
                            nameproduct: "Ps4 Pro",
                            nameclientproduct: "Sebastian Betancur C.",
                            document: "1053870578",
                            price: 1500000
                        }
                    ]
                   },
                   { 
                    id: "SP3",
                    name: "PCs Escritorio",
                    clientsprd : [
                        {
                            id: "SP3C1",
                            nameproduct: "Acer",
                            nameclientproduct: "Carlos Daniel Castro",
                            document: "1053870574",
                            price: 1300000
                        },
                        {
                            id: "SP3C2",
                            nameproduct: "Pc clon",
                            nameclientproduct: "Francisco Elias Cano",
                            document: "75065324",
                            price :1000000
                        }
                    ]
                   }, 
                   { 
                    id: "SP4",
                    name: "Accesorios",
                    clientsprd : [
                        {
                            id: "SP4C1",
                            nameproduct: "Diademas Gamer",
                            nameclientproduct: "Victor Giraldo",
                            document: "30327958",
                            price: 150000
                        },
                        {
                            id: "SP4C2",
                            nameproduct: "Teclado Gamer",
                            nameclientproduct: "Juan Manuel Castro",
                            document: "30352152",
                            price: 250000
                        }
                    ]
                   },    
                   { 
                       id: "SP5",
                       name: "Juegos",
                       clientsprd : [
                           {
                               id: "SP5C1",
                               nameproduct: "FIFA 21 ",
                               nameclientproduct: "Milton duque",
                               document: "30327958",
                               price: 200000
                           },
                           {
                               id: "SP5C2",
                               nameproduct: "PES 2021",
                               nameclientproduct: "Maira Villada",
                               document: "30352152",
                               price: 150000
                           }
                           
                       ]
                      },         
                     
            ];

        
          
       const [clients,setClients] = useState(serviceslist);
       const [products,setProducts] = useState(saleproductslist);
    return (
        <>
        <TableSCM 
       
        serviceslist={clients}
        onAddService= { (clientObj,serviceId)=>{
            //1. create new array clients 
            const newClients =[];

           for(let i=0; i<clients.length; i++) {
               if(clients[i].id !== serviceId) {
                   newClients.push(clients[i]);
               }
              else {
                newClients.push(
                    {
                        ...clients[i],
                        clients: [...clients[i].clients,clientObj]
                    });
              }
           }
           // 2. cambiar el arreglo de clients a través de la función setClients
           console.log({newClients});
           setClients(newClients);
        }}  
        saleproductslist = {products}
        onAddSale = { (productObj,clientsprdId)=> {
            //1. crear nuevo arreglo de products 
            const newProducts =[];

           for(let i=0; i<products.length; i++){

               if(products[i].id !== clientsprdId){
                    newProducts.push(products[i]);
               }
            else {
                newProducts.push(
                    {
                        ...products[i],
                        clientsprd: [...products[i].clientsprd, productObj]
                        
                    });
            }
               
           }
           // 2. cambiar el arreglo de clients a través de la función setProducts
           console.log({newProducts});
           setProducts(newProducts);
        }} 
        />
    </>
    );

}

export default SCMPage;