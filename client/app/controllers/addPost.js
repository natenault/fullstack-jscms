angular.module('jscmsApp.addpost', [])
.controller('AddPostCtrl', function($scope, $location, DataService) {

  $scope.postData = {};

  $scope.addSinglePost = function() {
    DataService.addOnePost($scope.postData)
    .then(function(post) {
      $location.path('/posts/' + post.id);
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  // Form Action Buttons
  $scope.addButton = false;
  $scope.updateButton = true;
  $scope.deleteButton = true;

});