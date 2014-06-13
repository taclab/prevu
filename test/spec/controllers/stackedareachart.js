'use strict';

describe('Controller: StackedareachartCtrl', function () {

  // load the controller's module
  beforeEach(module('prevuApp'));

  var StackedareachartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StackedareachartCtrl = $controller('StackedareachartCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
