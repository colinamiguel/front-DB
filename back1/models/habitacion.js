module.exports = (Sequelize, DataTypes) => {
    const Habitacion = Sequelize.define('Habitacion', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
      },  
      dispon:{
         type: DataTypes.INTEGER,
         allowNull: false,
         force: true,
      },
      numHab: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      FK_Reser_Hab: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
      }
    }, { timestamps: false });
    return Habitacion
} 