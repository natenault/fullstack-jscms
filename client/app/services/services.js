angular.module('jscmsApp.services', [])
.factory('DataService', function($http) {

  // GET all posts
  var getAllPosts = function() {
    return $http({
      method: 'GET',
      url: '/api/posts'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  // GET single post
  var getOnePost = function(id) {
    return $http({
      method: 'GET',
      url: '/api/posts/' + id
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  // POST single post
  var addOnePost = function(data) {
    return $http({
      method: 'POST',
      url: '/api/posts/',
      data: data
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  // DELETE single post
  var deleteOnePost = function(id) {
    return $http({
      method: 'DELETE',
      url: '/api/posts/' + id
    });
  };

  // PUT single post
  var updateOnePost = function(id, data) {
    return $http({
      method: 'PUT',
      url: '/api/posts/' + id,
      data: data
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  return {
    getAllPosts: getAllPosts,
    getOnePost: getOnePost,
    addOnePost: addOnePost,
    updateOnePost: updateOnePost,
    deleteOnePost: deleteOnePost
  };

});
