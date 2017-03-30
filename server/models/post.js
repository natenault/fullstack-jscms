'use strict';

module.exports = function(connection, DataTypes) {

  var Post = connection.define('post', {
    title: {
      type: DataTypes.STRING,
      unique: true,
      required: true,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT
    }
  });

  return Post;

};