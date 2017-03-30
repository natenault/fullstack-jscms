'use strict';

module.exports = function(connection, DataTypes) {

  var User = connection.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      required: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
    }
  });

  return User;

};