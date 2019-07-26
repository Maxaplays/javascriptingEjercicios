module.exports=function arrMap(arr, fn) {

    return arr.reduce(function (prev,curr) {
        prev.push(fn.call(null,curr))
        return prev
    },[])
}