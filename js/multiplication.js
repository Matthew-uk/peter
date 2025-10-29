const NumberA=document.getElementById("numberA")
const NumberB=document.getElementById("numberB")
const Button=document.getElementById("button")
const P_element=document.getElementById("result")

function multplication(e){
    e.preventDefault()
    console.log(NumberA.value)
    console.log(NumberB.value)
    console.log(NumberA.value*NumberB.value)
}
Button.addEventListener("click",multplication)

const NumberC=document.getElementById("numberC")
const NumberD=document.getElementById("numberD")
const ButtonB=document.getElementById("buttonb")

function division(e){
    e.preventDefault()
    console.log(NumberC.value)
    console.log(NumberD.value)
    console.log(NumberC.value/NumberD.value)
}
ButtonB.addEventListener("click",division)