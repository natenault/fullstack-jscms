angular.module('jscmsApp')
.factory('DataService', function($http) {

  var getAllPosts = function() {
    return $http({
      method: 'GET',
      url: '/api/posts'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  // var getOnePost = function(id) {
  //   return $http({
  //     method: 'GET',
  //     url: '/api/posts'
  //   })
  //   .then(function(resp) {
  //     return resp.data;
  //   });
  // };

  // var getUserPosts = function() {

  // };

  // var getUser = function() {

  // };

  return {
    getAllPosts: getAllPosts,
    // getOnePost: getOnePost
  };

});