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