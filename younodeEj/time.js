var net = require('net')

function date (i) {
    return (i < 10 ? '0' : '') + i
}

function now () {
    const d = new Date()
    return d.getFullYear() + '-' +
        date(d.getMonth() + 1) + '-' +
        date(d.getDate()) + ' ' +
        date(d.getHours()) + ':' +
        date(d.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
