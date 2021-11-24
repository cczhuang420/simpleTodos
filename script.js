var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function addBtn(li) {
  var deletebtn = document.createElement("button");
  deletebtn.innerHTML = "delete";
  li.append(deletebtn);
  deletebtn.addEventListener("click", (e) => {
    ul.removeChild(li);
  });
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  addBtn(li);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

// you can also use event.which() to get the key code
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleDoneClass(event) {
  event.target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleDoneClass);
