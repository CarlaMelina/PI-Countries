const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('activity', {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,  
        primaryKey: true,
         },
        activityName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        },
        difficulty: {
        type: DataTypes.ENUM('1','2','3','4','5'), //esta bien??
        allowNull: false,
        },
        duration: {
        type: DataTypes.TIME, // en horas!!
        },
        season: {
            type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
            allowNull: false,
         },
    },{ timestamps: false }
      );
  };