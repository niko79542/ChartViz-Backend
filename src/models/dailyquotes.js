  
"use strict";
module.exports = (sequelize, DataTypes) => {
  var DailyQuotes = sequelize.define('DailyQuotes', {
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

  DailyQuotes.associate = models => {
      models.DailyQuotes.belongsTo(models.Tickers, {
          foreignKey: {
              allowNull: false
          }
      });
  };

  return DailyQuotes;
};