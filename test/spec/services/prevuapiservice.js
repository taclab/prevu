'use strict';

describe('Service: prevuAPIservice', function () {

  // load the service's module
  beforeEach(module('prevuApp'));

  // instantiate service
  var prevuAPIservice;
  beforeEach(inject(function (_prevuAPIservice_) {
    prevuAPIservice = _prevuAPIservice_;
  }));

  it('should do something', function () {
    expect(!!prevuAPIservice).toBe(true);
  });

});
