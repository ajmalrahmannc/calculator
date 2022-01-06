function displayNum(num){
    result.value+=num
}
function clearBox(){
    result.value=""
}

function deleteNum(num){
    var del=result.value.slice(0,-1)
    result.value=del
}

function evaluateExpression(){
    result.value=eval(result.value)
}