
function display(num)

{
    output.value += num;  
    // id.value=to get value

}
// clear all digits

function clearAll()
{
    output.value=''

}
// delete last digit
function removeLast(){

    currentExp=output.value
    output.value=currentExp.slice(0,-1)
    

}

function evaluateExp(){

    // methode-1
    // exp=output.value //exp=7+7
    // result=eval(exp) result = 14 
    // output.value=result //display =14


    // method 2
    output.value=eval(output.value)

}


