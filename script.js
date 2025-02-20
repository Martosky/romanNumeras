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
    {value: 1000, symbol: "M"},
    {value: 900, symbol: "DM"},
    {value: 500, symbol: "D"},
    {value: 400, symbol: "CD"},
    {value: 100, symbol: "C"},
    {value: 90, symbol: "LC"},
    {value: 50, symbol: "L"},
    {value: 40, symbol: "XL"},
    {value: 10, symbol: "X"},
    {value: 9, symbol: "IX"},
    {value: 5, symbol: "V"},
    {value: 4, symbol: "IV"},
    {value: 1, symbol: "I"}
]
function romanFigure(n){
   result = ""
   for (let i = 0; i < dataArray.length; i++){
     while(n >= dataArray[i].value){
        result += dataArray[i].symbol
        n -= dataArray[i].value
     }
   }
   return result
}