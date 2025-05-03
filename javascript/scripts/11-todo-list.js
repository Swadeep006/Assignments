const myArray = [];

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    const todoObject = myArray[i];
    const { name, dueDate } = todoObject;
    const html = `
    <p>
    ${name} ${dueDate}
    <button onclick="
    myArray.splice(${i},1);
    renderTodoList();
    ">Delete</button>
    </p>
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
function addButton() {
  const inputElem = document.querySelector(".js-input");
  const dateInputElement = document.querySelector(".js-dueDate");
  const name = inputElem.value;
  const dueDate = dateInputElement.value;
  myArray.push({
    //name:name,
    //dueDate:dueDate
    name,
    dueDate,
  });

  inputElem.value = "";
  renderTodoList();
}
