'use strict';

var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var db = new Sequelize('jscms', '', '', {
  dialect: 'postgres'
});

// Models
var Post = db.define('Post', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    required: true,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT
  }
});

var Category = db.define('Category', {
  title: {
    type: Sequelize.STRING,
    required: true,
    allowNull: false
  }
});

// Associations
Post.belongsTo(Category);
Category.hasMany(Post);

Post.sync();
Category.sync();

exports.Post = Post;
