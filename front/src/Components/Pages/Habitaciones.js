import React , {useState} from 'react';
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import Navbar from '../Navbar/ClientNavbar';


const GET_HABITACIONES  = gql`
    query {

        getHabitaciones{
        id
        dispon
        numHab
        FK_Reser
        active
        }
    }
`;

const GET_HABITACION_BY_ID = gql`
    query GetHabitacionById($id: Int!){
        getHabitacion(id: $id){
            dispon
            numHab

        }
    }
`;

const CREATE_HABIITACION = gql`
    mutation CreateHabitacion($dispon: Int!, $numHab: Int!, $FK_Reser: Int!){
        createHabitacion(

            dispon: $dispon
            numHab: $numHab
            FK_Reser: $FK_Reser
            active: true
            ){
                dispon
                numHab
                FK_Reser
                active
            }
    }
`;

const UPDATE_HABITACION_DISPON = gql`
    query UpdateHabitacionDispon($idUpdate: Int!, $disponUpdate: Int!){
        updateHabitacionDispon(idUpdate: $idUpdate, disponUpdate: $disponUpdate){
            dispon
        }
    }
`;


export default function Habitaciones() {

    const [id, setId] = useState("");

    const [dispon, setDispon] = useState("");
    const [numHab, setNumHab] = useState("");
    const [FK_Reser, setFKReser] = useState("");

    const [disponUpdate, setDisponUpdate] = useState("");
    const [idUpdate, setIdUpdate] = useState("");

    const [getHabitaciones, {habitacionesSearchData, habitacionesSearchError, habitacionSearchLiading}] = useLazyQuery(GET_HABITACIONES);

    const [getHabitacionById, {habitacionSearchDataId, habitacionSearchErrorId, habitacionSearchLoadingId}] = useLazyQuery(GET_HABITACION_BY_ID, {
        variables: {id}
    });

    const [updateDispon, {habitacionUpdateDisponData, habitacionUpdateDisponError, habitacionUpdateDisponLiading}] = useLazyQuery(UPDATE_HABITACION_DISPON, {
        variables: {disponUpdate, idUpdate}
    });

    const [createHabitacionNueva, {newHabitacionData, newHabitacionRrror, newHabitacionLoading}] = useMutation(CREATE_HABIITACION, {
        variables: {dispon, numHab, FK_Reser}
    });

    



  return (
    <section>
        <Navbar />

        <div>
            <h2>Busquedas</h2>
                <input type='number' placeholder='Id' value={id} onChange = {(event) => setId(event.target.valueAsNumber)}></input>
                <button onClick={() => getHabitacionById() } >Buscar Id</button>
                <button type='button' onClick={() => getHabitaciones()}>Get All</button>
        </div>

        <div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="id" id="flexCheckDefault"></input>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Id
                    </label>
            </div>

            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="dispon" id="flexCheckDefault"></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Disponibilidad
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="numHab" id="flexCheckDefault"></input>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Numero de Habitación
                    </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="FK_Reser" id="flexCheckDefault"></input>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        FK Reserva
                    </label>
            </div>

        </div>

        <hr></hr>

        <div>
            <h2>Mutaciones</h2>
        </div>
        
        <div>
            <input type='number' placeholder='Habitaciones disponibles' value={dispon} onChange = {(event) => setDispon(event.target.valueAsNumber)}></input>
            <input type = 'number' placeholder='Numero de habitacion' value={numHab} onChange = {(event) => setNumHab(event.target.valueAsNumber)}></input>
            <input type='number' placeholder = 'FK reserva' value = {FK_Reser} onChange = {(event) => setFKReser(event.target.valueAsNumber)}></input>
            <button type='button' onClick={()=> createHabitacionNueva()}>Enviar</button> 
        </div>

        <div>
            <input type='number' placolder = 'Id Habitacion' value={idUpdate} onChange = {(event) => setIdUpdate(event.target.valueAsNumber)}></input>
            <input type='number' placolder = 'Habitaciones disponibles' value={disponUpdate} onChange = {(event) => setDisponUpdate(event.target.valueAsNumber)}></input>
            <button type='button' onClick={() => updateDispon()}>Cambiar Id</button>
        </div>



    </section>
  )
}
