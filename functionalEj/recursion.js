module.exports=function reduce(arr, fn, init) {
    if (!arr.length) { return init }
    var next = arr.shift()
    var reduced = fn(init, next, 0, arr)
    return reduce(arr,fn, reduced)
}
