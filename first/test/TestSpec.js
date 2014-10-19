var should = require('should'),
    First = require('../lib/first.js');

describe("FooBar Algorithm", function() {
    var first = new First();

    it("should be equal", function() {
        var expected = '1,foo,bar,foo,5,foo bar,7',
            actual = first(7);

        should.equal(expected, actual.join(','));
    });
});