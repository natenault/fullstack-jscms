'use strict';

module.exports = function(connection, DataTypes) {

  var Category = connection.define('category', {
    title: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    }
  });

  return Category;

};