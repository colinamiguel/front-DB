import React from 'react';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { useState } from 'react';


const GET_CLIENTE_BY_ID = gql`
query GetCliente($id: Int!){
    getCliente(id: $id){
        nombre
        correo
        cedulaCli
        nacionalidad
    }
}
`;

export function useClientes()  {
    
    const [id, setId] = useState("");

  return 
    const { error, data, loading } = useLazyQuery(GET_CLIENTE_BY_ID, {variables: id});
}

