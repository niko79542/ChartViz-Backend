  
"use strict";
module.exports = (sequelize, DataTypes) => {
  var Books = sequelize.define('Books', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    updatedAt: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  });
  return Books;
};