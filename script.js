///Cached values
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var counter = 5

///Counter
function Counter() {
	counter += 1
	return counter
}

///Input box
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	Counter()
	li.setAttribute("id",counter);
	li.setAttribute("onClick","getIndex(this.id)");
	li.appendChild(document.createTextNode(input.value));
	btn.setAttribute("onClick","getIndexDel(parentNode.id)");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

///Get Index Done
function getIndex(id, del) {
	var child = document.getElementById(id);
	var parent = child.parentNode;
	var index = Array.prototype.indexOf.call(parent.children, child);
	done(index)
}

///Get Index Delete
function getIndexDel(id) {
	var child = document.getElementById(id);
	var parent = child.parentNode;
	var index = Array.prototype.indexOf.call(parent.children, child);
	Delete(index)
}

///Done
function done(order) {
	list[order].classList.toggle("done")
}

///Delete
function Delete(order) {
	list[order].remove();
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);