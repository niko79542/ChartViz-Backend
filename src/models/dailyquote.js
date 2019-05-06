  
"use strict";
module.exports = (sequelize, DataTypes) => {
  var DailyQuote = sequelize.define('DailyQuote', {
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'date',
        allowNull: false
    },
    close: {
        type: DataTypes.FLOAT,
        field: 'close',
        allowNull: false
    },
    open: {
        type: DataTypes.FLOAT,
        field: 'close',
        allowNull: false
    },
    high: {
        type: DataTypes.FLOAT,
        field: 'close',
        allowNull: false
    },
    low: {
        type: DataTypes.FLOAT,
        field: 'close',
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