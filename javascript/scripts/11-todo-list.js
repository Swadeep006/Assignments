const myArray = [];

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    const todo = myArray[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
function addButton() {
  const inputElem = document.querySelector(".js-input");
  myArray.push(inputElem.value);
  console.log(myArray);
  inputElem.value = "";
  renderTodoList();
}
