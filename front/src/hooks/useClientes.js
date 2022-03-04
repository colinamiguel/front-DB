import React from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

const asdf = 'id\nnombre\ncorreo\nsexo';


const query = `query {
    getClientes {
        ${asdf}
    }
}`;

const GET_CLIENTES = gql(query);


export const useClientes = () =>{
    const { error, data, loading } = useQuery(GET_CLIENTES);

    return {
        error, data, loading,
    };
}