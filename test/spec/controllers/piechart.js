'use strict';

describe('Controller: PiechartCtrl', function () {

  // load the controller's module
  beforeEach(module('prevuApp'));

  var PiechartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PiechartCtrl = $controller('PiechartCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
