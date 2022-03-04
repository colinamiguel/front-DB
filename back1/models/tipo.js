module.exports = (Sequelize, DataTypes) => {
    const Tipo = Sequelize.define('Tipo', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
      },  
      precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      descrip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numBan: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      numCam: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      capac: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comodida: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      FK_Hab: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
      }
    }, { timestamps: false });
    return Tipo
} 