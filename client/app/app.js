angular.module('jscmsApp', [
  'jscmsApp.services',
  'jscmsApp.showposts',
  'jscmsApp.showpost',
  'jscmsApp.editpost',
  'jscmsApp.addpost',
  'jscmsApp.registeruser',
  'hc.marked',
  'ngSanitize',
  'ngMessages',
  'ngRoute'
])
.config(function($routeProvider) {

  $routeProvider
    // GET all posts
    .when('/posts', {
      templateUrl: 'app/templates/showPosts.html',
      controller: 'ShowPostsCtrl'
    })
    // POST single post
    .when('/posts/add', {
      templateUrl: 'app/templates/editPost.html',
      controller: 'AddPostCtrl'
    })
    // GET single post
    .when('/posts/:postId', {
      templateUrl: 'app/templates/showPost.html',
      controller: 'ShowPostCtrl'
    })
    // PUT or DELETE single post
    .when('/posts/:postId/edit', {
      templateUrl: 'app/templates/editPost.html',
      controller: 'EditPostCtrl'
    })
    // POST single user
    .when('/register', {
      templateUrl: 'app/templates/registerUser.html',
      controller: 'RegisterUserCtrl'
    })
    .otherwise({
      redirectTo: '/posts'
    });

});