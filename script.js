const output = document.getElementById("output")
const button = document.getElementById("convert-btn")
const input = document.getElementById("input")

function displayResult(){
   let finalResult = ""
    let value = input.value;
    if(value === ""){
        return output.innerText = "Type a valid number to the input field"
    }else if(value < 1){
        return output.innerText = "Type a number greater than 0 to the input field"
    }else if(value >= 4000){
        return output.innerText = "Type a number bellow 4000 to the input field"
    }else{
        const finalResult = romanFigure(value)
        output.innerText = finalResult
    }
    return finalResult
}