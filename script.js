
let svg = '<svg version="1.1" class="input__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="195.248px" height="195.248px" viewBox="0 0 195.248 195.248" style="enable-background:new 0 0 195.248 195.248;" xml:space="preserve"> <g> <path class="svg__delete" d="M193.063,155.572c0.334-1.679,0.039-3.517-1.278-5.161c-14.991-18.703-31.115-36.796-48.107-54.137 C149.784,89.579,155.83,82.828,161.75,76c9.912-11.433,24.994-26.328,26.968-41.827c0.093-0.726-0.042-1.349-0.263-1.9 c0.05-0.163,0.143-0.292,0.176-0.468c0.271-1.439,0.134-2.545-0.146-3.989c0.396,2.055-0.376-2.196-0.683-2.72 c-0.506-0.864-1.346-1.691-1.979-2.49c-2.536-3.197-5.292-6.226-8.112-9.173C174.046,9.58,166.176,0.74,159.893,2.962 c-1.828-2.272-5.151-3.214-7.646-0.394c-16.481,18.629-35.146,34.924-54.119,50.89C80.167,37.949,61.535,23.322,42.385,9.805 c-1.07-0.755-2.192-0.374-2.916,0.419c-0.971-0.068-1.969,0.145-2.896,0.77c-4.731,3.192-8.779,7.646-12.932,11.548 c-5.044,4.739-10.211,9.354-15.32,14.024c-0.674,0.617-1.056,1.338-1.217,2.088c-2.354,0.614-3.573,3.956-0.901,5.631 c19.087,11.966,35.1,27.953,49.914,45.069c-1.992,1.79-4.014,3.548-5.979,5.367c-13.436,12.439-26.681,25.389-37.835,39.958 C7.38,141.11-3.837,154.976,1.33,163.811c1.047,1.791,3.817,1.855,4.849,0c0.132-0.237,0.283-0.46,0.416-0.696 c2.292,4.629,6.075,8.898,9.355,12.25c4.495,4.591,11.863,12.046,18.964,11.42c0.387,1.837,2.996,2.569,4.348,1.191 c12.475-12.719,23.739-24.017,38.603-34.358c6.517-4.534,13.184-9.018,19.7-13.704c9.373,11.205,19.061,22.144,29.732,32.137 c9.274,8.686,22.869,21.983,36.165,22.373c1.608,0.047,2.812-0.655,3.557-1.697c7.865-3.384,15.068-9.347,20.631-15.772 C191.912,172.029,198.797,161.489,193.063,155.572z M42.891,61.424c1.146,0.615,2.304,1.214,3.48,1.786 c0.17,0.153,0.341,0.303,0.511,0.456c0.141,0.388,0.277,0.777,0.54,1.138c0.499,0.684,1.025,1.344,1.53,2.023 C46.96,64.987,44.941,63.185,42.891,61.424z M27.382,168.658c-0.544,0.356-0.988,0.785-1.348,1.255 c-0.294-0.262-0.584-0.526-0.874-0.791c1.173-0.771,2.319-1.573,3.47-2.367c0.335,0.103,0.677,0.171,1.023,0.215 c0.036,0.057,0.077,0.108,0.115,0.162C28.977,167.644,28.171,168.141,27.382,168.658z M116.361,108.108 c-0.651-0.487-1.304-0.975-1.949-1.47c-2.056-2.269-4.118-4.529-6.19-6.78c2.744,2.721,5.521,5.405,8.354,8.028 C116.504,107.959,116.434,108.035,116.361,108.108z"/> </g> </svg>'
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
  
  let todoItem = document.createElement('li');
  
  todoItem.className = "todo__item";

  // let todoName =  document.createElement('input');
  // todoName.value = input.value;
  let todoName =  document.createElement('span');
  todoName.innerHTML = input.value;
  todoName.className = "todo__text";

  todoItem.append(todoName);

	ul.append(todoItem);
	input.value = "";

	function crossOut() {
		todoName.classList.toggle("item__done");
	}

	todoName.addEventListener("click",crossOut);
  
  let dBtn = document.createElement("span");
  dBtn.className = "todo__delete";
  dBtn.innerHTML = svg;
  todoItem.append(dBtn);
  dBtn.addEventListener('click', deleteListItem);

	function deleteListItem(){

    todoItem.classList.add("todo__item-delete");
    setTimeout(() => todoItem.classList.add("delete"), 700);
		// todoItem.classList.add("delete")
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


