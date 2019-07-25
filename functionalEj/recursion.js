module.exports=function reduce(arr, fn, init) {
    console.log('arr',arr)
    console.log('fn',fn)
    console.log('init',init)
    if (arr.length===0) { return init };
    init = fn(init, arr[0]);
    return reduce(arr.slice(1),fn,init)
}
