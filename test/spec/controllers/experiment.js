'use strict';

describe('Controller: ExperimentCtrl', function () {

  // load the controller's module
  beforeEach(module('prevuApp'));

  var ExperimentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExperimentCtrl = $controller('ExperimentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
