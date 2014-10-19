var readline = require('readline'),
    First = require('./first.js');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Type N:", function(n) {
    var result = (new First)(n);

    console.log("Result:", result.join(', '));

    rl.close();
});