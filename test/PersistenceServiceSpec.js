describe('exampleController', function() {
    var persistenceService;

    // Initialization of the AngularJS application before each test case
    beforeEach(module('PruneApp'));

    // Injection of dependencies, $http will be mocked with $httpBackend
    beforeEach(inject(function(_persistenceService_) {
        persistenceService = _persistenceService_;

    }));

    it('should fetch from pouchdb', function() {
      persistenceService.getKitten('mittens').then(function(doc) {
        expect(doc.id).toEqual('mittens');
      });       
    });

});
