'use strict';

describe('Filter: groupBy', function () {

  // load the filter's module
  beforeEach(module('prevuApp'));

  // initialize a new instance of the filter before each test
  var groupBy;
  beforeEach(inject(function ($filter) {
    groupBy = $filter('groupBy');
  }));

  it('should return the input prefixed with "groupBy filter:"', function () {
    var text = 'angularjs';
    expect(groupBy(text)).toBe('groupBy filter: ' + text);
  });

});
