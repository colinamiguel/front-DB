module.exports = (Sequelize, DataTypes) => {
    const Cliente = Sequelize.define('Cliente', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },  
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cedulaCli: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      nacionalidad: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fechaNac: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sexo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      infoBanca: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estaLeal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fk_Reser : {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
      }
    }, { timestamps: false });
    return Cliente
} 