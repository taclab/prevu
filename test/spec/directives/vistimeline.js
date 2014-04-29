'use strict';

describe('Directive: visTimeline', function () {

  // load the directive's module
  beforeEach(module('prevuApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<vis-timeline></vis-timeline>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the visTimeline directive');
  }));
});
