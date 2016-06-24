/**
 * This is an example controller.
 * It triggers the UserdataService and puts the returned value on the scope
 *
 * @see services
 */

angular.module('PruneApp.controllers', [])
    .controller('exampleController', function ($scope, persistenceService) {
      $scope.get = function() {
        persistenceService.get().then(function (doc) {
          $scope.doc = doc;
        });
      }

      $scope.z = 0;
      $scope.sum = function() {
        $scope.z = $scope.x + $scope.y;
      };


    });
