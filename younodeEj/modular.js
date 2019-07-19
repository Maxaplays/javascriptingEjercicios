var file2 = require('./modular2.js')
var dir = process.argv[2]
var ext = process.argv[3]

file2(dir, ext, function (err, list) {
    if (err) {
        return console.error( err)
    }

    list.forEach(function (file) {
        console.log(file)
    })
})