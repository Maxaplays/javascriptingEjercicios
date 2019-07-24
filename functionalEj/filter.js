module.exports=function getShortMessages(messages){

    return messages.filter(function len(string){

        return string.message.length<50

    }).map(function (string) {
        return string.message
    })
}