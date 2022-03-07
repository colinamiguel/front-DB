import React , {useState} from 'react';
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import Navbar from '../Navbar/ClientNavbar';


const GET_HABITACION_BY_ID = gql`
    query GetHabitacionById($id: Int!){
        getHabitacion(id: $id){
            dispon
            numHab

        }
    }
`;

const CREATE_HABIITACION = gql`
    mutation CreateHabitacion($dispon: Int!, $numHab: Int!, $FK_Reser: Int!, $active: Boolean!){
        createHabitacion(

            dispon: $dispon
            numHab: $numHab
            FK_Reser: $FK_Reser
            active: $active
            ){
                dispon
                numHab
                FK_Reser
                active
            }
    }
`


export default function Habitaciones() {

    const [id, setId] = useState("");

    const [dispon, setDispon] = useState("");
    const [numHab, setNumHab] = useState("");
    const [FK_Reser, setFKReser] = useState("");
    const [active, setActive] = useState("");


    const [getHabitacionById, {habitacionSearchDataId, habitacionSearcherrorId, habitacionSearchloadingId}] = useLazyQuery(GET_HABITACION_BY_ID, {
        variables: {id}
    });

    const [createHabitacionNueva, {newHabitacionData, newHabitacionRrror, newHabitacionLoading}] = useMutation(CREATE_HABIITACION, {
        variables: {dispon, numHab, FK_Reser, active}
    });



  return (
    <section>
        <Navbar />

        <div>
            <h2>Busquedas</h2>
                <input type='number' placeholder='Id' value={id} onChange = {(event) => setId(event.target.valueAsNumber)}></input>
                <button onClick={() => getHabitacionById() } >Buscar Id</button>
        </div>

        <hr></hr>

        <div>
            <h2>Mutaciones</h2>
        </div>
            
                <input type='number' placeholder='Habitaciones disponibles' value={dispon} onChange = {(event) => setDispon(event.target.valueAsNumber)}></input>
                <input type = 'number' placeholder='Numero de habitacion' value={numHab} onChange = {(event) => setNumHab(event.target.valueAsNumber)}></input>
                <input type='number' placeholder = 'FK reserva' value = {FK_Reser} onChange = {(event) => setFKReser(event.target.valueAsNumber)}></input>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="active" id="flexCheckDefault"></input>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Active
                    </label>
                </div>

                <button type='button' onClick={()=> createHabitacionNueva()}>Enviar</button> 
            
        

    </section>
  )
}
