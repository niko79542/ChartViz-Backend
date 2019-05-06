  
"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tickers = sequelize.define('Tickers', {
    ticker: {
      type: DataTypes.STRING,
      allowNull: false, 

    },
    updatedAt: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  });

  Tickers.associate = models => {
    models.Tickers.hasMany(models.DailyQuotes);
  };

  return Tickers;
};