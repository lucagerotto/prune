/**
 * This is an example controller.
 * It triggers the UserdataService and puts the returned value on the scope
 *
 * @see services
 */

angular.module('PruneApp.controllers', [])
    .controller('exampleController', function ($scope, persistenceService) {

      persistenceService.get().then(function (doc) {
        $scope.doc = doc;
      });

    });
