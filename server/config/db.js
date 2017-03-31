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

var User = db.define('User', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    required: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
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
User.hasMany(Post);
Post.belongsTo(User);
Post.belongsTo(Category);
Category.hasMany(Post);

User.sync();
Post.sync();
Category.sync();

exports.User = User;
exports.Post = Post;
