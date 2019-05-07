  
"use strict";
module.exports = (sequelize, DataTypes) => {
  const Ticker = sequelize.define('Ticker', {
    ticker: {
      type: DataTypes.STRING,
      allowNull: false, 
      primaryKey: true,

    },
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
  });

  Ticker.associate = models => {
    models.Ticker.hasMany(models.DailyQuote);
  };

  return Ticker;
};