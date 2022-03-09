import React , {useState} from 'react';
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import Navbar from '../Navbar/ClientNavbar';




const GET_HOTEL = gql`
    query GetHotel($id: Int!){
      getEstablecimiento(id: $id){
            nombre
            id
            tipo
            instalaci
            pais
            ciudad
            calle
            califica
            comen
        }
    }
`;

const GET_ESTABLECIMIENTO_BY_NOMBRE = gql`
    query GetHotelByNombre($nombre: String!){
      getEstablecimientoByNombre(nombre: $nombre){
            nombre
            id
            tipo
            instalaci
            pais
            ciudad
            calle
            califica
            comen
        }
    }
`;

const GET_ESTABLECIMIENTO_BY_CALIIFICACION = gql`
    query GetHotelByCalifica($califica: Int!){
      getEstablecimientoByCalifica(califica: $califica){
            nombre
            id
            tipo
            instalaci
            pais
            ciudad
            calle
            califica
            comen
        }
    }
`;

const GET_ESTABLECIMIENTO_BY_TIPO = gql`
    query GetEstablecimientoByTipo($tipo: String!){
        getEstablecimientosByTipo(tipo: $tipo){
            nombre
            id
            tipo
            instalaci
            pais
            ciudad
            calle
            califica
            comen
        }
    }
`;

const GET_All_ESTABLECIMIENTOS= gql`
    query {
        getEstablecimientos{
            nombre
            tipo
            instalaci
            pais
            ciudad
            calle
            califica
            comen
        }
    }
`;

const GET_ESTABLECIMIENTOS_BY_PAIS = gql`
    query GetEstablecimientosByPais($pais: String!){
        getEstablecimientosByPais(pais: $pais){
            nombre
            tipo
            instalaci
            pais
            ciudad
            calle
            califica
            comen
        }
    }
`;

const GET_ESTABLECIMIENTOS_BY_CIUDAD = gql`
    query GetEstablecimientosByCiudad($ciudad: String!){
        getEstablecimientosByCiudad(ciudad: $ciudad){
            id
            nombre
            tipo
            instalaci
            pais
            ciudad
            calle
            califica
            comen
        }
    }
`;

//Mutations

const CREATE_ESTABLECIMIENTO = gql`
    mutation CreateEstablecimiento($idMutation: Int!, $nombreMutation: String!, $tipoMutation: String!, $instalaciMutation: String!, $paisMutation: String!, $ciudadMutation: String!, 
                                   $calleMutation: String!, $calificaMutation: Int!, $comenMutation: String!, $FK_Hab: Int!){
        createEstablecimiento(
            id: $idMutation
            nombre: $nombreMutation
            tipo: $tipoMutation
            instalaci: $instalaciMutation
            pais: $paisMutation
            ciudad: $ciudadMutation
            calle: $calleMutation
            califica: $calificaMutation
            comen: $comenMutation
            FK_Hab: $FK_Hab
            active: true
        ){
            id 
            nombre 
            tipo
            instalaci 
            pais
            ciudad 
            calle 
            califica 
            comen
            active
            FK_Hab
        }
    }
`;

const UPDATE_CALIFICA = gql`
    query UpdateCalifica($nombreUpdateH: String!, $calificaUpdate: Int!){
        updateEstablecimientoCalifica(nombreUpdateH: $nombreUpdateH, calificaUpdate: $calificaUpdate){
            califica
        }
    }
`;

export default function Hoteles() {

    const [id, setId] = useState("");
    const [califica, setCalifica] = useState("");
    const [nombre, setNombre    ] = useState("");

    const [tipo, setTipo] = useState("");
    
    
    const [pais, setPais] = useState("");
    const [ciudad, setCiudad] = useState("");

    const [idMutation, setIdMutation] = useState("");
    const [nombreMutation, setNombreMutation] = useState("");
    const [tipoMutation, setTipoMuation] = useState("");
    const [instalaciMutation, setInstalaci] = useState("");
    const [paisMutation, setPaisMutation] = useState("");
    const [calleMutation, setCalleMutation] = useState("");
    const [calificaMutation, setCalificaMutation] = useState("");
    const [comenMutation, setComenMutation] = useState("");
    const [ciudadMutation, setCiudadMutation] = useState("");
    const [FK_Hab, setFKHab] = useState("");

    const [nombreUpdateH, setNombreUpdateH] = useState("");
    const [calificaUpdate, setCalificaUpdate] = useState("");

    const [getHotelById, {loading: hotelSearchLoading, error: hotelSearchError, data: hotelSearchData, called: hotelSearchCalled}] = useLazyQuery(GET_HOTEL,
        { variables: {id}});

    const [getEstablecimientosByTipo, {loading: hotelSearchTipoLoading, error: hotelSearchTipoError, data: hotelSearchTipoData, called: hotelSearchTipoCalled}] = useLazyQuery(GET_ESTABLECIMIENTO_BY_TIPO,
        { variables: {tipo}});

    const [getEstablecimientosByPais, {loading: hotelSearchLoadingPais, error: hotelSearchErrorPais, data: hotelSearchDataPais, called: hotelSearchCalledPais}] = useLazyQuery(GET_ESTABLECIMIENTOS_BY_PAIS,
        { variables: {pais}});

    const [getEstablecimientosByCiudad, {loading: hotelSearchLoadingCiudad, error: hotelSearchErrorCiudad, data: hotelSearchDataCiudad, called: hotelSearchCalledCiudad}] = useLazyQuery(GET_ESTABLECIMIENTOS_BY_CIUDAD,
        { variables: {ciudad}});

    const [getEstablecimientoByName, {loading: hotelSearchLoadingName, error: hotelSearchErrorName, data: hotelSearchDataName, called: hotelSearchCalledName}] = useLazyQuery(GET_ESTABLECIMIENTO_BY_NOMBRE,
        { variables: {nombre}});

    const [getEstablecimientoByCalifica, {loading: hotelSearchLoadingCalifica, error: hotelSearchErrorCalifica, data: hotelSearchDataCalifica, called: hotelSearchCalledCalifica}] = useLazyQuery(GET_ESTABLECIMIENTO_BY_CALIIFICACION,
        { variables: {califica}});

    const [getEstablecimientos, {loading: hotelSearchLoadingAll, error: hotelSearchErrorAll, data: hotelSearchDataAll, called: hotelSearchCalledAll}] = useLazyQuery(GET_All_ESTABLECIMIENTOS
        );



    const [createEstablecimiento, {loading: hotelCreateLoadingAll, error: hotelCreateErrorAll, data: hotelCreateDataAll, called: hotelCreateCalledAll}] = useMutation(CREATE_ESTABLECIMIENTO,{
        variables: {idMutation, calificaMutation, calleMutation, paisMutation, nombreMutation, instalaciMutation, tipoMutation, comenMutation, ciudadMutation, FK_Hab}
    });

    const [updateCalificaEstablecimiento, {loading: hotelUpdateLoadingAll, error: hotelUpdateErrorAll, data: hotelUpdateDataAll, called: hotelUpdateCalledAll}] = useLazyQuery(UPDATE_CALIFICA,{
        variables: {nombreUpdateH, calificaUpdate}
    });
    

  return (    
    <section>
        <Navbar />
        <div>
            Hoteles
        </div>

        <div>

            <h2>Busquedas</h2>
        
            <input id="hotelInput" type="number" value={id} onChange={(event) => setId(event.target.valueAsNumber)}></input>
            <button onClick={() => getHotelById()}>Search</button>

            <input id="hotelInput" value={nombre} onChange={(event) => setNombre(event.target.value)}></input>
            <button onClick={() => getEstablecimientoByName()}>Search by Name</button>

            <input id="hotelInput" type="number" value={califica} onChange={(event) => setCalifica(event.target.valueAsNumber)}></input>
            <button onClick={() => getEstablecimientoByCalifica()}>Search by calificación</button>

            <input id="hotelInput" value={pais} onChange={(e) => setPais(e.target.value)}></input>
            <button onClick={() => getEstablecimientosByPais()}>Search by País</button>

            <input id="hotelInput" value={ciudad} onChange={(e) => setCiudad(e.target.value)}></input>
            <button onClick={() => getEstablecimientosByCiudad()}>Search by Ciudad</button>

            <input id="hotelInput" value={tipo} onChange={(e) => setTipo(e.target.value)}></input>
            <button onClick={() => getEstablecimientosByTipo()}>Search by Tipo</button>

            <button onClick={() => getEstablecimientos()}>Get All</button>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Nombre
                    </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Pais
                    </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Ciudad
                    </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Calle
                    </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Comentario
                    </label>
            </div>
        </div>

        <hr></hr>

        <div>
            <h2>Mutaciones</h2>
                <div>
                    <input id="hotelInput" placeholder = 'Nombre' value={nombreMutation} onChange={(e) => setNombreMutation(e.target.value)}></input>
                    <input id="hotelInput" placeholder='País' value={paisMutation} onChange={(e) => setPaisMutation(e.target.value)}></input>
                    <input id="hotelInput" placeholder='Tipo' value={tipoMutation} onChange={(e) => setTipoMuation(e.target.value)}></input>
                    <input id="hotelInput" placeholder='Instalaciones' value={instalaciMutation} onChange={(e) => setInstalaci(e.target.value)}></input>
                    <input id="hotelInput" placeholder='Ciudad' value={ciudadMutation} onChange={(e) => setCiudadMutation(e.target.value)}></input>
                    <input id="hotelInput" placeholder='Calle' value={calleMutation} onChange={(e) => setCalleMutation(e.target.value)}></input>
                    <input type='number' id="hotelInput" placeholder='Calificación' value={calificaMutation} onChange={(e) => setCalificaMutation(e.target.valueAsNumber)}></input>
                    <input id="hotelInput" placeholder='Comentario' value={comenMutation} onChange={(e) => setComenMutation(e.target.value)}></input>
                    <input type='number' id="hotelInput" placeholder='Id' value={idMutation} onChange={(e) => setIdMutation(e.target.valueAsNumber)}></input>
                    <input type = 'number' id="hotelInput" placeholder='FK Habitación' value={FK_Hab} onChange={(e) => setFKHab(e.target.valueAsNumber)}></input>
                    <button type='button' onClick={() => createEstablecimiento()}>Create Establecimiento</button>
                </div>

                <div>
                    <input type='number' id="hotelInput" placeholder = 'Calificación' value={calificaUpdate} onChange={(e) => setCalificaUpdate(e.target.valueAsNumber)}></input>
                    <input id="hotelInput" placeholder = 'Nombre' value={nombreUpdateH} onChange={(e) => setNombreUpdateH(e.target.value)}></input>
                    <button type='button' onClick={() => updateCalificaEstablecimiento()}>Actualizar calificación</button>
                </div>

        </div>

    </section>
  )
}