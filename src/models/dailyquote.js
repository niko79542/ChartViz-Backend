  
"use strict";
module.exports = (sequelize, DataTypes) => {
  var DailyQuote = sequelize.define('DailyQuote', {
    mmddyy: {
        type: DataTypes.STRING,
        field: 'mmddyy',
        allowNull: false
    },
    close: {
        type: DataTypes.FLOAT,
        field: 'close',
        allowNull: false
    },
    open: {
        type: DataTypes.FLOAT,
        field: 'open',
        allowNull: false
    },
    high: {
        type: DataTypes.FLOAT,
        field: 'high',
        allowNull: false
    },
    low: {
        type: DataTypes.FLOAT,
        field: 'low',
        allowNull: false
    },
    volume: {
        type: DataTypes.FLOAT,
        field: 'volume',
        allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  });

  DailyQuote.associate = models => {
      models.DailyQuote.belongsTo(models.Ticker, {
          foreignKey: {
              allowNull: false
          }
      });
  };

  return DailyQuote;
};