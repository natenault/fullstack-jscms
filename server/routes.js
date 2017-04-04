var router = require('express').Router();
var postController = require('./controllers/postController.js');


//===============================================
// POST ROUTES
//===============================================

// GET Return all posts
router.get('/posts', postController.getPosts);

// GET Return single post
router.get('/posts/:postId', postController.getPost);

// POST Add single post
router.post('/posts', postController.postPost);

// PUT Edit single post
router.put('/posts/:postId', postController.putPost);

// DELETE Delete single post
router.delete('/posts/:postId', postController.deletePost);


module.exports = router;