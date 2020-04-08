
let enterBtn = document.querySelector('.input__btn');
let input = document.querySelector('.input__new');
let ul = document.querySelector('.todo__list');
let item = document.getElementsByTagName('li');

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
  
  let li = document.createElement('li');
  li.innerHTML = input.value;
  li.className = "todo__item";
	ul.append(li);
	input.value = "";

	function crossOut() {
		li.classList.toggle("item__done");
	}

	li.addEventListener("click",crossOut);
  
  let dBtn = document.createElement("button");
  dBtn.innerHTML = "X";
  li.append(dBtn);
  dBtn.addEventListener('click', deleteListItem);

	function deleteListItem(){
		li.classList.add("delete")
	}
}

function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) { 
		createListElement();
	} 
}

enterBtn.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


