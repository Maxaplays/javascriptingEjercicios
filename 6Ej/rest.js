module.exports=(...args) =>{
    var sum = args.reduce((curr,item) => curr + item);
    return sum / args.length;
}