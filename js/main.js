const Firstname=document.getElementById("Fname")
const Lastname=document.getElementById("Lname")
const Password=document.getElementById("Password")
const Button=document.getElementById("button")
const firstname_result = document.getElementById("firstname-result")
const lastname_result = document.getElementById("lastname-result")

// connect the button to the function
Button.addEventListener("click", submitForm)

//function we want to run whenever we submit the form
function submitForm(e) {
    e.preventDefault();
    console.log(Firstname.value)
    console.log(Lastname.value)
    console.log(Password.value)
    firstname_result.innerHTML = Firstname.value
    lastname_result.innerHTML = Lastname.value
}
