var app = angular.module('myApp', []);
app.service('service', function() {
      this.value = 0;
    });
app.controller('controller1',
    ['$rootScope', '$scope', 'service',
    function ($rootScope, $scope, service) {
       $scope.number = service;   
    }]);

app.controller('controller2',
    ['$rootScope', '$scope', 'service',
    function ($rootScope, $scope, service) {
      $scope.sqrNumber = service;
    }]);
    

