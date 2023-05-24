function isWin(element){
    return (element.result === 'W')
}

function superbowlWin(record){
    if (record.find(isWin)){
        return record.find(isWin).year
    }
    else return record.find(isWin)

}
