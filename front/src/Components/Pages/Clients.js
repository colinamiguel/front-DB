import React , {useState} from 'react';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import Navbar from '../Navbar/ClientNavbar';



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


const GET_CLIENTE_BY_NAME = gql`
    query GetClienteByName($nombre: String!){
        getClienteByName(nombre: $nombre){
            nombre
            correo
            cedulaCli
            nacionalidad
        }
    }
`;

const GET_CLIENTE_BY_APELLIDO = gql`
    query GetClienteByApellido($apellido: String!){
        getClienteByApellido(apellido: $apellido){
            nombre
            correo
            nacionalidad
            cedulaCli
        }
    }
`;

const GET_All_CLIENTES= gql`
    query {
        getClientes{
            nombre
            correo
            nacionalidad
            cedulaCli
        }
    }
`;


export default function Clients() {

    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

    const [getClienteById, {loading: clientSearchLoading, error: clientSearchError, data: clientSearchData, called: clientSearchCalled}] = useLazyQuery(GET_CLIENTE_BY_ID,
        { variables: {id}});

    const [getClienteByName, {loading: clientSearchLoadingName, error: clientSearchErrorName, data: clientSearchDataName, called: clientSearchCalledName}] = useLazyQuery(GET_CLIENTE_BY_NAME,
        { variables: {nombre}});

    const [getClienteByApellido, {loading: clientSearchLoadingApellido, error: clientSearchErrorApellido, data: clientSearchDataApellido, called: clientSearchCalledApellido}] = useLazyQuery(GET_CLIENTE_BY_APELLIDO,
        { variables: {apellido}});

    const [getAllClientes, {loading: clientSearchLoadingAll, error: clientSearchErrorAll, data: clientSearchDataAll, called: clientSearchCalledAll}] = useLazyQuery(GET_All_CLIENTES);

    console.log({
        clientSearchData,
        clientSearchError,
        clientSearchCalled,
        clientSearchLoading
    }
    )
    



  return (    
    <section id='clientesSearch'>

        <Navbar />
        <div>
            Clientes
        </div>
        <input type="number" value={id} onChange={(event) => setId(event.target.valueAsNumber)}></input>
        <button onClick={() => getClienteById()}>Search</button>

        <input  value={nombre} onChange={(event) => setNombre(event.target.value)}></input>
        <button onClick={() => getClienteByName()}>Search by name</button>

        <input  value={apellido} onChange={(event) => setApellido(event.target.value)}></input>
        <button onClick={() => getClienteByApellido()}>Search by surname</button>
        <button onClick={() => getAllClientes()}>Get all</button>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                    Nombre
                </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                    Apellido
                </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                    Cédula
                </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                    Fecha de nacimiento
                </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                    Sexo
                </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                    Información bancaria
                </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                    Estado de lealtad
                </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                    Correo
                </label>
        </div>

    </section>
  )
}
