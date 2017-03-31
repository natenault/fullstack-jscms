var db = require('../config/db.js');

module.exports = {

  // GET all posts
  getPosts: function(req, res) {
    db.Post.findAll({
      include: [db.User]
    })
    .then(function(posts) {
      res.json(posts);
    })
    .catch(function(err) {
      res.send({error: err});
    });
  },

  // GET single post
  getPost: function(req, res) {
    db.Post.findById(req.params.id)
    .then(function(post) {
      res.json(post);
    })
    .catch(function(err) {
      res.send({error: err});
    });
  },

  // POST single post
  postPost: function(req, res) {
    db.Post.create({
      title: req.body.title,
      content: req.body.content
    })
    .then(function(post) {
      res.sendStatus(201);
    })
    .catch(function(err) {
      res.send({error: err});
    });
  },

  // PUT single post
  putPost: function(req, res) {
    db.Post.update({
      title: req.body.title,
      content: req.body.content
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(function(updatedPost) {
      res.status(200).json(updatedPost);
    })
    .catch(function(err) {
      res.send({error: err});
    });
  },

  // DELETE single post
  deletePost: function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(deletedPost) {
      res.status(200).json(deletedPost);
    })
    .catch(function(err) {
      res.send({error: err});
    });
  }

};
