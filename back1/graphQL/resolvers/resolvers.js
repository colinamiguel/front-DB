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
            return await models.cliente.findOne({where: {nombre: args.nombre}
            })
        },

        async getClienteByCedula(root, args, { models }) {
            return await models.cliente.findOne({where: {cedulaCli: args.cedulaCli}})
        },

        async getClienteByApellido(root, args, { models }){
            return await models.cliente.findOne({where: {apellido: args.apellido}})
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
        async getEstablecimiento(root, args, { models }) {
            return await models.establecimiento.findByPk(args.id)
        },
        async getEstablecimientoByNombre(root, args, { models }) {
            return await models.establecimiento.findOne({where: {nombre :args.nombre}})
        },
        async getEstablecimientoByCalifica(root, args, { models }) {
            return await models.establecimiento.findAll({where: {califica :args.califica}}).then((data)=> {})
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
        async updateCliente(root, args, { models }) {
            return await models.cliente.findByPk(args.id)
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

        async createHabitacion(root, { dispon, numHab, fk_Reser, active }, { models }){
            return await models.habitacion.create( { dispon, numHab, fk_Reser, active  })
        },
        async createCliente(root, { nombre, apellido, cedulaCli, nacionalidad, fechaNac, sexo, infoBanca, estaLeal, correo,fk_Reser, active }, { models }){
            return await models.cliente.create( { nombre, apellido, cedulaCli, nacionalidad, fechaNac, sexo, infoBanca, estaLeal, correo,fk_Reser, active })
        },
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