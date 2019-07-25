var slice = Array.prototype.slice

function logger(namespace) {
    return console.log.apply(namespace,slice.message)

}
module.exports=logger