const Firstname=document.getElementById("Fname")
const Lastname=document.getElementById("Lname")
const Password=document.getElementById("Password")
const Button=document.getElementById("button")

// connect the button to the function

//function we want to run whenever we submit the form
function submitForm(e) {
    e.preventDefault();
    console.log(Firstname.value)
}
