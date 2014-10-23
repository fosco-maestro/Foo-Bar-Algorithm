var should = require('should'),
    FooBar = require('../lib/foo-bar.js');

describe("FooBar Algorithm", function() {
    var first = new FooBar();

    it("should be equal", function() {
        var expected = '1,foo,bar,foo,5,foo bar,7',
            actual = first(7);

        should.equal(expected, actual.join(','));
    });
});