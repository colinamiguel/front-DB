import React , {useState} from 'react';
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import Navbar from '../Navbar/ClientNavbar';
import ClientesList from '../../pages/ClientesList';

//         Queries

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

const GET_CLIENTE_BY_CEDULA= gql`
    query GetClienteByCedula($cedulaCli: Int!){
        getClienteByCedula(cedulaCli: $cedulaCli){
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

//         Mutaciones

const CREATE_CLIENTE = gql`
    mutation CreateCliente($nombreMutation: String!, $apellidoMutation: String!, $cedulaCliMutation: Int!,
                            $nacionalidad: String!, $fechaNac: Int!, $sexo: String!,
                            $infoBanca: String!, $estaLeal: String!, $correo: String!,
                            $fk_Reser: Int!, $active: Boolean!){
        createCliente(

            nombre: $nombreMutation
            apellido: $apellidoMutation
            cedulaCli: $cedulaCliMutation
            nacionalidad: $nacionalidad
            fechaNac: $fechaNac
            sexo: $sexo
            infoBanca: $infoBanca
            estaLeal: $estaLeal
            correo: $correo
            fk_Reser: $fk_Reser
            active: $active
        ){
            nombre
            apellido
            cedulaCli
            nacionalidad
            fechaNac
            sexo
            infoBanca
            estaLeal
            correo
            fk_Reser
            active
        }
    }
`;

const UPDATE_ID = gql`
    query UpdateClienteId($nombreUpdate: String!, $idUpdate: Int!){
        updateClienteId(nombreUpdate: $nombreUpdate, idUpdate: $idUpdate
        ){
            nombre
        }
    }
`;

const UPDATE_APELLIDO = gql`
    query UpdateClientApellido($apellidoUpdate: String!, $cedulaCliUpdate: Int!){
        updateClienteApellido(apellidoUpdate: $apellidoUpdate, cedulaCliUpdate: $cedulaCliUpdate){
            nombre
        }
    }
`


export default function Clients() {

   function getAttributes(){
       const attributes = '';
       
       getClienteById();
   }


   
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [cedulaCli, setCedulaCli] = useState("");
   
   
   
    const [idUpdate, setIdUpdate] = useState("");
    const [nombreUpdate, setNombreUpdate] = useState("");

    const [apellidoUpdate, setApellidoUpdate] = useState("");
    const [cedulaCliUpdate, setCedulaCliUpdate] = useState("");

    
    const [idMutation, setIdMutation] = useState("");
    const [cedulaCliMutation, setCedulaCliMutation] = useState("");
    const [nombreMutation, setNombreMutation] = useState("");
    const [apellidoMutation, setApellidoMutation] = useState("");
    const [sexo, setSexo] = useState("");
    const [fechaNac, setFechaNac] = useState("");
    const [infoBanca, setInfoBanca] = useState("");
    const [correo, setCorreo] = useState("");
    const [fk_Reser, setFkReser] = useState("");
    const [active, setActive] = useState();
    const [nacionalidad, setNacionalidad] = useState("");
    const [estaLeal, setEstaLeal] = useState("");


    

    const [createClienteNuevo, {data, loading, error}] = useMutation(CREATE_CLIENTE, 
        {variables: 
            {idMutation, nombreMutation, apellidoMutation, cedulaCliMutation, nacionalidad, fechaNac, sexo, infoBanca, estaLeal, correo,fk_Reser,active}
        }
    );

    const [updateId, {dataUpdateId, loadingUpdateId, errorUpdateId}] = useLazyQuery(UPDATE_ID, 
        {variables: 
            {idUpdate, nombreUpdate}
        }
    );

    const [updateApellido, {dataUpdateApellido, loadingUpdateApellido, errorUpdateApellido}] = useLazyQuery(UPDATE_APELLIDO,
        {variables: apellidoUpdate, cedulaCliUpdate})



    const [getClienteById, {loading: clientSearchLoading, error: clientSearchError, data: clientSearchData, called: clientSearchCalled}] = useLazyQuery(GET_CLIENTE_BY_ID,
        { variables: {id}});

    const [getClienteByName, {loading: clientSearchLoadingName, error: clientSearchErrorName, data: clientSearchDataName, called: clientSearchCalledName}] = useLazyQuery(GET_CLIENTE_BY_NAME,
        { variables: {nombre}});

    const [getClienteByApellido, {loading: clientSearchLoadingApellido, error: clientSearchErrorApellido, data: clientSearchDataApellido, called: clientSearchCalledApellido}] = useLazyQuery(GET_CLIENTE_BY_APELLIDO,
        { variables: {apellido}});

    const [getAllClientes, {loading: clientSearchLoadingAll, error: clientSearchErrorAll, data: clientSearchDataAll, called: clientSearchCalledAll}] = useLazyQuery(GET_All_CLIENTES);

    const [getClienteByCedula, {loading: clientSearchLoadingCedula, error: clientSearchErrorCedula, data: clientSearchDataCedula, called: clientSearchCalledCedula}] = useLazyQuery(GET_CLIENTE_BY_CEDULA,
        { variables: {cedulaCli}});
    


  return (    
    <section id='clientesSearch'>

        <Navbar />
        
        <div>
            <h2>Busquedas</h2>
        </div>
        <input type="number" placeholder='Id' value={id} onChange={(event) => setId(event.target.valueAsNumber)}></input>
        <button onClick={() => getAttributes()}>Buscar</button>

        <input  placeholder='Nombre'value={nombre} onChange={(event) => setNombre(event.target.value)}></input>
        <button onClick={() => getClienteByName()}>Buscar nombre</button>

        <input  placeholder='Apellido' value={apellido} onChange={(event) => setApellido(event.target.value)}></input>
        <button onClick={() => getClienteByApellido()}>Buscar apellido</button>

        <input placeholder='Cédula' type = 'number' value={cedulaCli} onChange={(event) => setCedulaCli(event.target.valueAsNumber)}></input>
        <button onClick={() => getClienteByCedula()}>Buscar cédula</button>

        <button onClick={() => getAllClientes()}>Buscar todos</button>

        <div className ="form-check">
            <input className="form-check-input" type="checkbox" value="nombre" id="flexCheckDefault"></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Nombre
                </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="apellido" id="flexCheckDefault"></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Apellido
                </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="cedulaCli" id="flexCheckDefault"></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Cédula
                </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="fechaNac" id="flexCheckDefault"></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Fecha de nacimiento
                </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="sexo" id="flexCheckDefault"></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Sexo
                </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="infoBanca" id="flexCheckDefault"></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Información bancaria
                </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="estaLeal" id="flexCheckDefault"></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Estado de lealtad
                </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="correo" id="flexCheckDefault"></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Correo
                </label>
        </div>

        <hr></hr>

        <div>
            <h2>Mutaciones</h2>
        </div>

        <h4>Crear cliente</h4>

    
        <input type = 'number' placeholder = 'Id' value={idMutation} onChange={(event) => setIdMutation(event.target.valueAsNumber)}/>
        <input type = 'text' placeholder = 'Nombre' value ={nombreMutation} onChange={(event) => setNombreMutation(event.target.value)}/>
        <input type = 'text' placeholder = 'Apellido' value = {apellidoMutation} onChange={(event) => setApellidoMutation(event.target.value)}/>
        <input type = 'number' placeholder = 'Cédula' value = {cedulaCliMutation} onChange={(event) => setCedulaCliMutation(event.target.valueAsNumber)}/>
        <input type = 'text' placeholder = 'Nacionalidad' value = {nacionalidad} onChange={(event) => setNacionalidad(event.target.value)}/>
        <input type = 'number' placeholder = 'Fecha de nacimiento' value = {fechaNac} onChange={(event) => setFechaNac(event.target.valueAsNumber)}/>
        <input type = 'text' placeholder = 'Sexo' value = {sexo} onChange={(event) => setSexo(event.target.value)}/>
        <input type = 'text' placeholder = 'Informacion bancaria' value = {infoBanca} onChange={(event) => setInfoBanca(event.target.value)}/>
        <input type = 'text' placeholder = 'Correo' value = {correo} onChange={(event) => setCorreo(event.target.value)}/>
        <input type = 'number' placeholder = 'fk_reserva' value = {fk_Reser} onChange={(event) => setFkReser(event.target.valueAsNumber)}/>
        
        
        <input type = 'boolean' placeholder = 'Active' value = {active} onChange={(event) => setActive(event.target.value)}/> 

        <div className="form-check">
            <input className="form-check-input" type="checkbox" id="flexCheckDefault"></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Active
                </label>
        </div>
        <button onClick={() => createClienteNuevo()}>Enviar</button>

        <h4>Modificar cliente</h4>

        <div>
            <input type = 'number' value = {idUpdate} onChange={(event) => setIdUpdate(event.target.valueAsNumber)}></input>
            <input type='text' value={nombreUpdate} onChange={(event) => setNombreUpdate(event.target.value)}></input>
            <button type='button' onClick={()=>updateId()}>Enviar</button>
        </div>








        


    </section>
  )
}
