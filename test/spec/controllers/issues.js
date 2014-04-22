'use strict';

describe('Controller: IssuesctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('prevuApp'));

  var IssuesctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IssuesctrlCtrl = $controller('IssuesctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
