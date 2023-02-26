function solution(inputString) {
    var inputString = inputString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    var splitedString = inputString.split('').reverse().join('')
    if(splitedString === inputString){
        return true
    }
    else{
        return false
    }
}
