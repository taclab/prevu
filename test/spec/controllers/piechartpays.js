'use strict';

describe('Controller: PiechartpaysCtrl', function () {

  // load the controller's module
  beforeEach(module('prevuApp'));

  var PiechartpaysCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PiechartpaysCtrl = $controller('PiechartpaysCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
