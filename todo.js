// alert("Welcome to Ultimate To Do List") 

// Lessons learned
//- avoid globale variables
//- strive make functions reusable /////edited 6 to 42
function updateItemStatus() {
	var cbId = this.id.replace("cb_", "");
	var itemText = document.getElementById("item_"+ cbId);

	if (this.checked) {
		itemText.className = "checked";
	} else {
		itemText.className = "";  
	}
}

function renameItem() {
	var newText = prompt("What should this item be renamed to?");

	if (!newText || newText == "" || newText =="") {
		return false;
	}

	this.innerText = newText;
}

function removeItem() {
	this.style.display = "none";
}

function addNewItem(list, itemText) {

	var date = new Date();
	var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds(); 

	var listItem = document.createElement("li");
	listItem.id = "li_" + id;
	listItem.ondblclick = removeItem;

	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.id = "cb_" + id;
	checkBox.onclick = updateItemStatus;
	//here the attribute is TYPE and value is checkbox

	var span = document.createElement("span");
	span.id = "item_" + id;
	span.innerText = itemText;
	span.onclick = renameItem;


	listItem.appendChild(checkBox);
	listItem.appendChild(span);

	list.appendChild(listItem);

}


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