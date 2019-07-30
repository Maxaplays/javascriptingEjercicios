let userArray = process.argv.slice(2);
let newarr={};

[, newarr.username, newarr.email]=userArray;
console.log(newarr)