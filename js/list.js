const button = document.getElementById('button');
const list = document.getElementById('list'); // List is our input.
const ul = document.getElementById('ul');

var groceries = []; // Here we created an empty groceries array

function addGroceries() {
  groceries.push(list.value); // groceries.push add an item to the groceries array
  console.log(groceries);
}

button.addEventListener('click', addGroceries);
