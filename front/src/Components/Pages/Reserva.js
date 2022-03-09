import { useLazyQuery, gql } from '@apollo/client';
import React, { useState } from 'react';
import Navbar from '../Navbar/ClientNavbar';


const GET_RESERVA_BY_ID = gql`
    query GetReservaById($id: Int!){
        getReserva(id: $id){
            fechaEn
            fechaSa
            active
        }
    }
`;

export default function Reserva() {

    const [id, setId] = useState("");


    const[getReservaById, {reservaSearchedByIdData, reservaSearchedByIdLoading, reservaSearchedByIdError}] = useLazyQuery(GET_RESERVA_BY_ID,{
        variables: {id}
    })

  return (
    <section>
        <Navbar/> 

        <div>
            <h2>Busquedas</h2>
        </div>

        <input type = 'number' placeholder='Id' value= {id}onChange={(event) => setId(event.target.valueAsNumber)}></input>
        <button type='button' onClick={ () => getReservaById()}>Buscar Id</button>

    </section>
  )
}
