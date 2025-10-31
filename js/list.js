const button = document.getElementById('button');
const list = document.getElementById('list'); // List is our input.
const ul = document.getElementById('ul');

var groceries = [];

function addGroceries() {
  groceries.push(list.value);
  console.log(groceries);
}

button.addEventListener('click', addGroceries);
