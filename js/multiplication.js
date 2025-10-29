const NumberA=document.getElementById("numberA")
const NumberB=document.getElementById("numberB")
const Button=document.getElementById("button")
const P_element=document.getElementById("result")

function multplication(e){
    e.preventDefault()
    console.log(NumberA.value)
    console.log(NumberB.value)
    var multplication_result = NumberA.value * NumberB.value;
    console.log(multplication_result)
    P_element.innerHTML = multplication_result
}
Button.addEventListener("click",multplication)

const NumberC=document.getElementById("numberC")
const NumberD=document.getElementById("numberD")
const ButtonB=document.getElementById("buttonb")

function division(e){
    e.preventDefault()
    console.log(NumberC.value)
    console.log(NumberD.value)
    var divide_result = NumberC.value/NumberD.value
    console.log(divide_result)
    P_element.innerHTML = divide_result
}
ButtonB.addEventListener("click",division)
