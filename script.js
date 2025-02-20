const output = document.getElementById("output")
const button = document.getElementById("convert-btn")
const input = document.getElementById("number")

button.addEventListener("click", displayResult)

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

const dataArray = [
    {value: 1000, Symbol: "M"},
    {value: 900, Symbol: "DM"},
    {value: 500, Symbol: "D"},
    {value: 400, Symbol: "CD"},
    {value: 100, Symbol: "C"},
    {value: 90, Symbol: "LC"},
    {value: 50, Symbol: "L"},
    {value: 40, Symbol: "XL"},
    {value: 10, Symbol: "X"},
    {value: 9, Symbol: "IX"},
    {value: 5, Symbol: "V"},
    {value: 4, Symbol: "IV"},
    {value: 1, Symbol: "I"}
]
function romanFigure(n){

}