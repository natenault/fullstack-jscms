var router = require('express').Router();
var postController = require('./controllers/postController.js');
var userController = require('./controllers/userController.js');


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


//===============================================
// USER ROUTES
//===============================================

// POST Add single user
router.post('/register', userController.addNewUser);

// GET all users
router.get('/users', userController.getAllUsers);

// GET user profile page
router.post('/user/:userId', userController.getSingleUser);

// POST Authenticate user
// router.post('/users/login/');

// GET Return all posts by single user
// router.ACTION('/posts/:userId

module.exports = router;