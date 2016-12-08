'use strict';
module.exports = function(sequelize, DataTypes) {
  var Number = sequelize.define('Number', {
    number: DataTypes.INTEGER
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Number;
};