
var inputs = process.argv.slice(2,(process.argv.length))
var result = inputs.map(inputs=>inputs.charAt(0))
var all= result.reduce((acc,item)=>acc+=item)
console.log(`[${inputs}] becomes "${all}"`)
