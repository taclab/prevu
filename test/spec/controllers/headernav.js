'use strict';

describe('Controller: HeadernavCtrl', function () {

  // load the controller's module
  beforeEach(module('prevuApp'));

  var HeadernavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeadernavCtrl = $controller('HeadernavCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
