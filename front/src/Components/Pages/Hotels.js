import React , {useState} from 'react';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
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


export default function Hoteles() {

    const [id, setId] = useState("");
    const [califica, setCalifica] = useState("");
    const [nombre, setNombre] = useState("");


    const [getHotelById, {loading: hotelSearchLoading, error: hotelSearchError, data: hotelSearchData, called: hotelSearchCalled}] = useLazyQuery(GET_HOTEL,
        { variables: {id}});

    const [getEstablecimientoByName, {loading: hotelSearchLoadingName, error: hotelSearchErrorName, data: hotelSearchDataName, called: hotelSearchCalledName}] = useLazyQuery(GET_ESTABLECIMIENTO_BY_NOMBRE,
        { variables: {nombre}});

    const [getEstablecimientoByCalifica, {loading: hotelSearchLoadingCalifica, error: hotelSearchErrorCalifica, data: hotelSearchDataCalifica, called: hotelSearchCalledCalifica}] = useLazyQuery(GET_ESTABLECIMIENTO_BY_CALIIFICACION,
        { variables: {califica}});

    const [getEstablecimientos, {loading: hotelSearchLoadingAll, error: hotelSearchErrorAll, data: hotelSearchDataAll, called: hotelSearchCalledAll}] = useLazyQuery(GET_All_ESTABLECIMIENTOS
        );

    console.log({
        hotelSearchData,
        hotelSearchError,
        hotelSearchCalled,
        hotelSearchLoading
    }
    )



  return (    
    <section>
        <Navbar />
        <div>
            Hoteles
        </div>
        <input id="hotelInput" type="number" value={id} onChange={(event) => setId(event.target.valueAsNumber)}></input>
        <button onClick={() => getHotelById()}>Search</button>

        <input id="hotelInput" value={nombre} onChange={(event) => setNombre(event.target.value)}></input>
        <button onClick={() => getEstablecimientoByName()}>Search by Name</button>

        <input id="hotelInput" type="number" value={califica} onChange={(event) => setCalifica(event.target.valueAsNumber)}></input>
        <button onClick={() => getEstablecimientoByCalifica()}>Search by calificación</button>

        <button onClick={() => getEstablecimientos()}>Get All</button>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                    Nombre
                </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                    Pais
                </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                    Ciudad
                </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                    Calle
                </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                    Comentario
                </label>
        </div>

    </section>
  )
}