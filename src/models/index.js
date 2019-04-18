"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(__filename);
const decamelizeKeys = require('decamelize-keys');
const config = require('../config/config');
var db = {};

config.sequelizeOpts.define = {
    hooks: {
      beforeValidate: (item, options) => {
        // store fields in DB as snake_case instead of camelCase
        if (item.meta && typeof(item.meta) === 'object') {
          item.meta = decamelizeKeys(item.meta, '_');
        }
      }
    }
  };

console.log(config);
  
const sequelize = new Sequelize(
    config.connection.name,
    config.connection.username,
    config.connection.password,
    config.sequelizeOpts
);


fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  console.log(db);
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;