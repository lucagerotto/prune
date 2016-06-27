(function(){
  "use strict";

//angular.module('PruneApp.services')
angular.module('PruneApp.services',[])
.service('persistenceService', ["pouchDB", function(pouchDB) {
  var db = pouchDB('http://127.0.0.1:5984/kittens');

  return {
  getKitten : function(name) {    return db.get(name);  },
  get : function(){ return db.get('mittens');}

}

}]);
//.factory('UserdataService', ['Restangular', '$q', UserdataService]);





  })();
