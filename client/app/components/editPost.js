angular.module('jscmsApp.editpost', [])
.controller('EditPostCtrl', function($scope, $routeParams, $location, DataService) {

  $scope.postID = $routeParams.postId;
  $scope.postData;

  // GET post on page load
  var initSinglePost = function() {
    DataService.getOnePost($scope.postID)
    .then(function(post) {
      $scope.postData = post;
    })
    .catch(function(error) {
      console.log(error);
    });
  };
  initSinglePost();

  // POST (update) post
  $scope.updateSinglePost = function() {
    DataService.updateOnePost($scope.postID, $scope.postData)
      .then(function() {
        $location.path('/posts/' + $scope.postID);
      })
      .catch();
  };

  // Delete post
  $scope.deleteSinglePost = function() {
    DataService.deleteOnePost($scope.postID)
      .then(function() {
        $location.path('/');
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  // Form Action Buttons
  $scope.addButton = true;
  $scope.updateButton = false;
  $scope.deleteButton = false;

});