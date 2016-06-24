describe('exampleController', function() {
    var scope, controller, httpBackend, _persistenceService;
    var createController;

    // Initialization of the AngularJS application before each test case
    beforeEach(module('PruneApp'));

    // Injection of dependencies, $http will be mocked with $httpBackend
    beforeEach(inject(function($rootScope, $controller, persistenceService) {
         scope = $rootScope.$new();
        //httpBackend = $httpBackend;
        persistenceService = persistenceService;

        createController = function() {
            return $controller('exampleController', {'$scope': scope, 'persistenceService' : persistenceService});
            };


    }));

    it('should query the webservice', function() {

       var controller = createController();
       //var controller = controller('exampleController', {'$scope': scope});
        // Which HTTP requests do we expect to occur, and how do we response?
      //  httpBackend.expectGET('/users').respond('[{"name": "First User"}, {"name": "Second User"}]');

        // Starting the controller


        // Respond to all HTTP requests
      //  httpBackend.flush();

        // Triggering the AngularJS digest cycle in order to resolve all promises
        //scope.$apply();

        // We expect the controller to put the right value onto the scope
  //      expect(scope.firstUsername).toEqual('First User');
      scope.x = 1;
      scope.y = 2;
      scope.sum();
      expect(scope.z).toBe(3);

    });

});
