const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3), // tiene que ser codigo de 3 letras!!
   
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    flagImage:{
    type: DataTypes.STRING, //MODIFICAR DT
    allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    subregion:{
      type: DataTypes.STRING,
      

    },
    area: {
      type: DataTypes.INTEGER,
      
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
  },{
    timestamps: false,
  });
};
