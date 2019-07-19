var flag = 0;
for (var i = 2; i<process.argv.length; i++){
    flag+=Number(process.argv[i]);

}
console.log(flag);