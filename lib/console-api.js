var readLine = require('readLine'),
    FooBar = require('./foo-bar.js');

var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Type N:", function(n) {
    var result = (new FooBar)(n);

    console.log("Result:", result.join(', '));

    rl.close();
});