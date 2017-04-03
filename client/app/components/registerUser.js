angular.module('jscmsApp.registeruser', [])
.controller('RegisterUserCtrl', function($scope, $location, UserService) {

  $scope.userData = {};

  $scope.registerUser = function() {
    UserService.registerNewUser($scope.userData)
    .then(function(user) {
      $location.path('/user/' + user.id);
    })
    .catch(function(error) {
      console.log(error);
    });
  };

});