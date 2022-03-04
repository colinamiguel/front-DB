module.exports = (Sequelize, DataTypes) => {
    const Reserva = Sequelize.define('Reserva', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
      },  
      fechaEn: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fechaSa: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
      }
    }, { timestamps: false });
    return Reserva
} 