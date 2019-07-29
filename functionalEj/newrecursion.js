
function getDependencies(tree,result){
    var arr=result ? result : []
if(tree && Object.keys(tree).length > 0 && tree.hasOwnProperty('dependencies')){

    Object.keys(tree.dependencies).forEach(dep=>{
        arr.push(dep+'@'+tree.dependencies[dep].version)

        getDependencies(tree.dependencies[dep],arr)

    })
}else{

    arr.push()
}
return [... new Set(arr.sort())]


}
module.exports=getDependencies