'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('post', {
    body: DataTypes.STRING,
    alias: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return post;
};