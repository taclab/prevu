'use strict';

describe('Controller: DiscretebarchartCtrl', function () {

  // load the controller's module
  beforeEach(module('prevuApp'));

  var DiscretebarchartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DiscretebarchartCtrl = $controller('DiscretebarchartCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
