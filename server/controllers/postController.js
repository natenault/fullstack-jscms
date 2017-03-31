var Post = require('../models').Post;
var User = require('../models').User;

module.exports = {

  // GET all posts
  getPosts: function(req, res) {
    Post.findAll({
      include: [User]
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
    Post.findById(req.params.id)
    .then(function(post) {
      res.json(post);
    })
    .catch(function(err) {
      res.send({error: err});
    });
  },

  // POST single post
  postPost: function(req, res) {
    Post.create({
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
    Post.update({
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
    Post.destroy({
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