'use strict';

var Sequelize = require('sequelize');
var connection = new Sequelize('jscms', 'root', '', {
  dialect: 'postgres'
});

var db = {};

db.Sequelize = Sequelize;
db.connection = connection;

// Models
db.User = require('../models/user.js')(connection, Sequelize);
db.Post = require('../models/post.js')(connection, Sequelize);
db.Category = require('../models/category.js')(connection, Sequelize);

// Associations
db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);
db.Post.belongsTo(db.Category);
db.Category.hasMany(db.Post);

connection.sync();

module.exports = db;
