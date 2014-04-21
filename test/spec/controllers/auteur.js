'use strict';

describe('Controller: AuteurCtrl', function () {

  // load the controller's module
  beforeEach(module('prevuApp'));

  var AuteurCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuteurCtrl = $controller('AuteurCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
