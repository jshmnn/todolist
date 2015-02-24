// alert("Welcome to Ultimate To Do List") 

// Lessons learned
//- avoid globale variables
//- strive make functions reusable
function updateItemStatus() {
	var cbId = this.id.replace("cb_", "");
	var itemText = document.getElementById("item_"+cbId);

	if (this.checked) {
		itemText.className = "checked";
	} 
	else {
		itemText.className = "";  
	}
}


function addNewItem(list, itemText) {
	totalItems++; 

	var listItem = document.createElement("li");

	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = "cb_" + totalItems;
	checkbox.onclick = updateItemStatus;
	//here the attribute is TYPE and value is checkbox

	var span = document.createElement("span");
	span.id = "item_" + totalItems;
	span.innerText = itemText;


	listItem.appendChild(checkbox);
	listItem.appendChild(span);

	list.appendChild(listItem);

}

var totalItems = 0;
var inItemText = document.getElementById("inItemText");
inItemText.focus();
inItemText.onkeyup = function(event) { 

	//event.which (13) -> ENTER
	//only proceed if key press is ENTER key

	if (event.which == 13) {
		var itemText = inItemText.value; 

		if ( itemText == "" || itemText == " ") {
				return false;
		}

	 	addNewItem(document.getElementById("todolist"), itemText);

	 	inItemText.focus();
	 	inItemText.select();
	 }
	};