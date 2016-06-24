(function(){
  "use strict";


//angular.module('PruneApp.services', ["pouchdb"]);
/**
 * Setup of main AngularJS application, with Restangular being defined as a dependency.
 *
 * @see controllers
 * @see services
 */
angular.module('PruneApp',
    [
    //    'restangular',
        'pouchdb',
        'PruneApp.services',
        'PruneApp.controllers'
    ]
);
angular.module('PruneApp').run(["persistenceService",function(persistenceService) {

  persistenceService.get().then(function (doc) {
    console.log(doc);
  });

} ]);
//angular.bootstrap("body",["PruneApp"],  { strictDi: true});
angular.element(document).ready(function() {
    angular.bootstrap(document, ['PruneApp'], {strictDi : true});
  });
})();
