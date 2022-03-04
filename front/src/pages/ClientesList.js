import React from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import './ClientesLists.css';
import { useClientes } from '../hooks/useClientes';

export default function ClientesList(){

    const {error, data, loading } = useClientes();

    console.log({error, data, loading})

    if(loading){
        return<div>Loading</div>;
    };

    if(error){
        return<div>Error</div>;
    };


  return (
    <div className='ListaDeCientes'>
        {data.getClientes.map(cliente => {
            return (
            <ul>
                <li><div>Nombre: {cliente.nombre}, ID: {cliente.id}, Correo: {cliente.correo}, Sexo: {cliente.sexo} </div></li>   
            </ul>
                
        )
        })}
    </div>
  )
  
}
