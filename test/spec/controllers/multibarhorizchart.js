'use strict';

describe('Controller: MultibarhorizchartCtrl', function () {

  // load the controller's module
  beforeEach(module('prevuApp'));

  var MultibarhorizchartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MultibarhorizchartCtrl = $controller('MultibarhorizchartCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
