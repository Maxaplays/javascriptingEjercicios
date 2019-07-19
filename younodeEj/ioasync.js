var fs = require('fs');
var buff = process.argv[2];

fs.readFile(buff, function (err, contents) {
    if (err) {
        return console.log(err);
    }
    var num = contents.toString().split('\n').length - 1;
    console.log(num);
})