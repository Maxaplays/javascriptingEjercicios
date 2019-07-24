module.exports=function countWords(inputWords){
    return inputWords.reduce(function(all,some){
        if(some in all){
            all[some]++
        }
        else{
            all[some]=1
        }
        return all
    },{})
}