var router = require('express').Router();
var postController = require('./controllers/postController.js');

// GET Return all posts
router.get('/posts', postController.getPosts);

// GET Return single post
router.get('/posts/:postId/', postController.getPost);

// POST Add single post
router.post('/posts/', postController.postPost);

// PUT Edit single post
router.put('/posts/:postId/', postController.putPost);

// DELETE Delete single post
router.delete('/posts/:postId/', postController.deletePost);

// GET Return all posts by single user
// router.ACTION('/posts/:userId

// POST Add single user
// router.post('/users/signup/');

// POST Authenticate user
// router.post('/users/login/');

module.exports = router;