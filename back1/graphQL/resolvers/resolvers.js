import Sequelize from 'sequelize';



const resolvers = {

    Query: {

        //Get 
        async getHabitaciones(root, args, { models }){
            return await models.habitacion.findAll()
        },
        async getHabitacion(root, args, { models }) {
            return await models.habitacion.findByPk(args.id)
        },
        async getClientes(root, args, { models }){
            return await models.cliente.findAll()
        },
        async getCliente(root, args, { models }) {
            return await models.cliente.findByPk(args.id)
        },

        async getClienteByName(root, args, { models }) {
            return await models.cliente.findAll({where: {nombre: args.nombre}
            })
        },

        async getClienteByCedula(root, args, { models }) {
            return await models.cliente.findOne({where: {cedulaCli: args.cedulaCli}})
        },

        async getClienteByApellido(root, args, { models }){
            return await models.cliente.findAll({where: {apellido: args.apellido}})
        },

        async getTipos(root, args, { models }){
            return await models.tipo.findAll()
        },
        async getTipo(root, args, { models }) {
            return await models.tipo.findByPk(args.id)
        },
        async getEstablecimientos(root, args, { models }){
            return await models.establecimiento.findAll()
        },

        async getEstablecimientosByTipo(root, args, { models }){
            return await models.establecimiento.findAll({where: {tipo: args.tipo}})
        },
        async getEstablecimiento(root, args, { models }) {
            return await models.establecimiento.findByPk(args.id)
        },
        async getEstablecimientoByNombre(root, args, { models }) {
            return await models.establecimiento.findAll({where: {nombre :args.nombre}})
        },

        async getEstablecimientosByCiudad(root, args, { models }) {
            return await models.establecimiento.findAll({where: {ciudad :args.ciudad}})
        },

        async getEstablecimientosByPais(root, args, { models }) {
            return await models.establecimiento.findAll({where: {pais :args.pais}})
        },
        async getEstablecimientoByCalifica(root, args, { models }) {
            return await models.establecimiento.findAll({where: {califica :args.califica}})
            
        },
        async getReservas(root, args, { models }){
            return await models.reserva.findAll()
        },
        async getReserva(root, args, { models }) {
            return await models.reserva.findByPk(args.id)
        },

        //Update

       async updateHabitaciones(root, args, { models }){
            return await models.habitacion.findAll()
        },
        async updateHabitacion(root, args, { models }) {
            return await models.habitacion.findByPk(args.id)
        },
        async updateClientes(root, args, { models }){
            return await models.cliente.findAll()
        },
        async updateCliente1111(root, args, { models }) {
            return await models.cliente.update({
                id: 3}, {where: {id: args.id}}   
            )
        },

        async updateClienteNombre(root, args, { models }) {
            return await models.cliente.update({
                id: args.idUpdate}, {where: {nombre: args.nombreUpdate}}
                
            )
        },

        async updateClienteCorreo(root, args, { models }) {
            return await models.cliente.update({
                correo: args.correoUpdate}, {where: {cedulaCli: args.cedulaCliUpdate}}
                
            )
        },

        async updateHabitacionDispon(root, args, { models }) {
            return await models.habitacion.update({
                dispon: args.disponUpdate}, {where: {id: args.idUpdate}}
                
            )
        },

        async updateEstablecimientoCalifica(root, args, {models}){
            return await models.establecimiento.update({
                califica: args.calificaUpdate}, {where: {nombre: args.nombreUpdateH}})
        },

        async updateTipos(root, args, { models }){
            return await models.tipo.findAll()
        },
        async updateTipo(root, args, { models }) {
            return await models.tipo.findByPk(args.id)
        },
        async updateEstablecimientos(root, args, { models }){
            return await models.establecimiento.findAll()
        },
        async updateEstablecimiento(root, args, { models }) {
            return await models.establecimiento.findByPk(args.id)
        },
        async updateReservas(root, args, { models }){
            return await models.reserva.findAll()
        },
        async updateReserva(root, args, { models }) {
            return await models.reserva.findByPk(args.id)
        }

    },
 
            
    Mutation: {

        //create

        async createHabitacion(root, { dispon, numHab, FK_Reser, active }, { models }){
            return await models.habitacion.create( { dispon, numHab, FK_Reser, active  })
        },
        async createCliente(root, { nombre, apellido, cedulaCli, nacionalidad, fechaNac, sexo, infoBanca, estaLeal, correo,fk_Reser, active }, { models }){
            return await models.cliente.create( { nombre, apellido, cedulaCli, nacionalidad, fechaNac, sexo, infoBanca, estaLeal, correo,fk_Reser, active})
        },

        // active = true
        async createTipo(root, { precio, descrip, numBan, numCam, capac, comodida, FK_Hab, active }, { models }){
            return await models.tipo.create( { precio, descrip, numBan, numCam, capac, comodida, FK_Hab, active })
        },
        async createEstablecimiento(root, { nombre, tipo, instalaci, pais, ciudad, calle, califica, comen, FK_Hab, active }, { models }){
            return await models.establecimiento.create( { nombre, tipo, instalaci, pais, ciudad, calle, califica, comen, FK_Hab, active })
        },
        async createReserva(root, { fechaEn, fechaSa, active }, { models }){
            return await models.reserva.create( {fechaEn, fechaSa, active})
        },

        //update

        async updateHabitacion(root, { dispon, numHab, fk_Reser, active  }, { models }){
            return await models.habitacion.update( { dispon, numHab, fk_Reser, active  })
        },
        async updateCliente(root, { nombre, apellido, cedulaCli, nacionalidad, fechaNac, sexo, infoBanca, estaLeal, correo,fk_Reser, active }, { models }){
            return await models.cliente.update( { nombre, apellido, cedulaCli, nacionalidad, fechaNac, sexo, infoBanca, estaLeal, correo,fk_Reser, active })
        },

        async updateCliente2222(root, args, { models }){
            return await models.cliente.update({nombre: "Kevin"}, {where: {nombre: args.nombre}})
        },

        async updateTipo(root, { precio, descrip, numBan, numCam, capac, comodida, FK_Hab, active }, { models }){
            return await models.tipo.update( { precio, descrip, numBan, numCam, capac, comodida, FK_Hab, active })
        },
        async updateEstablecimiento(root, { nombre, tipo, instalaci, pais, ciudad, calle, califica, comen, FK_Hab, active }, { models }){
            return await models.establecimiento.update( { nombre, tipo, instalaci, pais, ciudad, calle, califica, comen, FK_Hab, active })
        },
        async updateReserva(root, { fechaEn, fechaSa, active }, { models }){
            return await models.reserva.update( { fechaEn, fechaSa, active })
        }
    }
}

module.exports = resolvers