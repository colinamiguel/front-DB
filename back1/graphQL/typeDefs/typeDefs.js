const{ gql } = require('apollo-server-express')

const typeDefs = gql`
 
type Habitacion{
    id: Int!
    dispon: Int!
    numHab: Int!
    FK_Reser: Int!
    active: Boolean!
}

type Cliente{
    id: Int!
    nombre: String!
    apellido: String!
    cedulaCli: Int!
    nacionalidad: String!
    fechaNac: Int!
    sexo: String!
    infoBanca: String!
    estaLeal: String!
    correo: String!
    fk_Reser: Int!
    active: Boolean!
}

type Tipo{
    id: Int!
    precio: Int!
    descrip: String!
    numBa: Int!
    numCam: Int!
    capac: Int!
    comodida: String!
    FK_Hab: Int!
    active: Boolean!
}


type Establecimiento{
    id: Int!
    nombre: String!
    tipo: String!
    instalaci: String!
    pais: String!
    ciudad: String!
    calle: String!
    califica: Int!
    comen: String!
    FK_Hab: Int!
    active: Boolean!
}

type Reserva{
    id: Int!
    fechaEn: Int!
    fechaSa: Int!
    active: Boolean!
}

type Query{
    

    getHabitaciones: [Habitacion],
    getHabitacion(id: Int!): Habitacion

    getClientes: [Cliente!],
    getCliente(id: Int!): Cliente,
    getClienteByName(nombre: String!): Cliente,
    getClienteByApellido(apellido: String!): Cliente,
    getClienteByCedula(cedulaCli: Int!): Cliente,

    getEstablecimientos: [Establecimiento],
    getEstablecimiento(id: Int!): Establecimiento
    getEstablecimientoByCalifica(califica: Int!): Establecimiento
    getEstablecimientoByNombre(nombre: String!): Establecimiento

    getReservas: [Reserva],
    getReserva(id: Int!): Reserva

    getTipos: [Tipo],
    getTipo(id: Int!): Tipo

    updateHabitaciones: [Habitacion],
    updateHabitacion(id: Int!): Habitacion

    updateClientes: [Cliente],
    updateCliente(id: Int!): Cliente

    updateEstablecimientos: [Establecimiento],
    updateEstablecimiento(id: Int!): Establecimiento

    updateReservas: [Reserva],
    updateReserva(id: Int!): Reserva

    updateTipos: [Tipo],
    updateTipo(id: Int!): Tipo

}

type Mutation{

    createHabitacion(dispon: Int!, numHab: Int!, FK_Reser: Int!, active: Boolean!): Habitacion!
    createCliente(nombre: String!, apellido: String!, cedulaCli: Int!, nacionalidad: String!, fechaNac: Int!, sexo: String!, infoBanca: String!, estaLeal: String!, correo: String!, fk_Reser: Int!, active: Boolean!): Cliente!
    createTipo(precio: Int!, descrip: String!, numBan: Int!, numCam: Int!, capac: Int!, comodida: String!, FK_Hab: Int!, active: Boolean!): Tipo!
    createEstablecimiento(nombre: String!, tipo: String!, instalaci: String!, pais: String!, ciudad: String!, calle: String!, califica: Int!, comen: String!, FK_Hab: Int!, active: Boolean!): Establecimiento!
    createReserva(fechaEn: Int!, fechaSa: Int!, active: Boolean!): Reserva!
    

    updateHabitacion(dispon: Int!, numHab: Int!, FK_Reser: Int!, active: Boolean!): Habitacion!
    updateCliente(nombre: String!, apellido: String!, cedulaCli: Int!, nacionalidad: String!, fechaNac: Int!, sexo: String!, infoBanca: String!, estaLeal: String!, correo: String!, fk_Reser: Int!, active: Boolean!): Cliente!
    updateTipo(precio: Int!, descrip: String!, numBan: Int!, numCam: Int!, capac: Int!, comodida: String!, FK_Hab: Int!, active: Boolean!): Tipo!
    updateEstablecimiento(nombre: String!, tipo: String!, instalaci: String!, pais: String!, ciudad: String!, calle: String!, califica: Int!, comen: String!, FK_Hab: Int!, active: Boolean!): Establecimiento!
    updateReserva(fechaEn: Int!, fechaSa: Int!, active: Boolean!): Reserva!
    
}
`
module.exports = typeDefs
