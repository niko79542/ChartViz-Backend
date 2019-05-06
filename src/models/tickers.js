  
"use strict";
module.exports = (sequelize, DataTypes) => {
  const Ticker = sequelize.define('Ticker', {
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

  Ticker.associate = models => {
    models.Ticker.hasMany(models.DailyQuote);
  };

  return Ticker;
};