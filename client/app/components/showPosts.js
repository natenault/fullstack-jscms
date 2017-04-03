angular.module('jscmsApp.showposts', [])
.controller('ShowPostsCtrl', function($scope, DataService) {

  var initPostList = function() {
    DataService.getAllPosts()
    .then(function(posts) {
      $scope.posts = posts;
    })
    .catch(function(error) {
      console.log(error);
    });
  };
  initPostList();

});