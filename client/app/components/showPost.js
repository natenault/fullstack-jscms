angular.module('jscmsApp.showpost', [])
.controller('ShowPostCtrl', function($scope, $routeParams, DataService) {

  $scope.postID = $routeParams.postId;

  var initSinglePost = function() {
    DataService.getOnePost($scope.postID)
    .then(function(post) {
      $scope.post = post;
    })
    .catch(function(error) {
      console.log(error);
    });
  };
  initSinglePost();

});