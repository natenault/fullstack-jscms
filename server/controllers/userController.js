var db = require('../config/db.js');

module.exports = {

  // Add new user
  addNewUser: function(req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password
    })
    .then(function(user) {
      res.status(201).json(user);
    })
    .catch(function(err) {
      res.send({error: err});
    });
  },

  getAllUsers: function(req, res) {
    db.User.findAll({})
    .then(function(users) {
      res.json(users);
    })
    .catch(function(err) {
      res.send({error: err});
    });
  },

  getSingleUser: function(req, res) {
    db.User.findById(req.params.userId)
    .then(function(user) {
      res.json(user);
    })
    .catch(function(err) {
      res.send({error: err});
    });
  }

};