'use strict';

describe('Directive: stupidTable', function () {

  // load the directive's module
  beforeEach(module('prevuApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<stupid-table></stupid-table>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stupidTable directive');
  }));
});
