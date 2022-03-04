module.exports = (Sequelize, DataTypes) => {
    const Establecimiento = Sequelize.define('Establecimiento', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
      },  
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instalaci: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pais: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      calle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      califica: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      FK_Hab: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
      },
      
    }, { timestamps: false });
    return Establecimiento
} 