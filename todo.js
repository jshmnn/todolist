// alert("Welcome to Ultimate To Do List") 
//	<li><input type= "checkbox" /> <span> Make this To-Do List </span></li> 

// Lessons learned
//- avoid globale variables
//- strive make functions reusable
function addNewItem(list) {
	var listItem = document.createElement("li");
	listItem.innerText = "Hello";

	list.appendChild(listItem);
}

var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function() {
	addNewItem(document.getElementById("todolist"));
	addNewItem(document.getElementById("list2"))
};