angular.module('gteamtest', [])
.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.gotoTop = function() {
      $location.hash(0,0); //0,0 is the top left corner

      // call $anchorScroll()
      $anchorScroll();
    };
  }]);

//alternate approach with jquery
// $(document).ready( function() {

//   $("#totop").click( function() {
//  	window.scrollTo(0,0);
//  	return false;
//   });

// });