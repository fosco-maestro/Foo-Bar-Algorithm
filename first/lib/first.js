module.exports = function() {
    "use strict";

    /**
     * Recursion version of FooBar algorithm
     *
     * @param {number} [n=0] - how many iterations
     * @param {number} [i=0] - iterator
     * @param {[]} [out=[]] - output
     *
     * @returns {[]}
     */
    var getFooBarArray = function(n, i, out)
    {
        var str = '';
        i = i || 1;
        out = out || [];

        if (i > n) {
            return out;
        }

        if (i % 2 == 0) {
            str = 'foo';
        }

        if (i % 3 == 0) {
            str += (str == '' ? '' : ' ') + 'bar';
        }

        if (str === '') {
            str = i.toString();
        }

        out.push(str);

        return getFooBarArray(n, i + 1, out);
    };

    return function(n) {
        return getFooBarArray(n || 0);
    };
};