
const arr= process.argv.slice(2,(process.argv.length))
const min= Math.min(...arr)
console.log(`The minimum of [${arr}] is ${min}`)