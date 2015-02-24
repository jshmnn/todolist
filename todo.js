// alert("Welcome to Ultimate To Do List") 
//	<li><input type= "checkbox" /> <span> Make this To-Do List </span></li> 

// Lessons learned
//- avoid globale variables
//- strive make functions reusable

function addNewItem(list, itemText) {
	var listItem = document.createElement("li");
	listItem.innerText = itemText;

	list.appendChild(listItem);
}

var inItemText = document.getElementById("inItemText");
inItemText.focus();
inItemText.onkeyup = function(event) { 

	if (event.which == 13) {
		var itemText = inItemText.value; 

		if (!itemText || itemText == "" || itemText == " ") {
				return false;
		}

	 	addNewItem(document.getElementById("todolist"), itemText);

	 	inItemText.focus();
	 	inItemText.select();
	 }
	};