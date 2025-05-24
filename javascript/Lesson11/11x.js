const myArray = JSON.parse(localStorage.getItem("myArray")) || [];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    const todoObject = myArray[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        myArray.splice(${i},1);
        saveToStorage();
        renderTodoList();"
        class="delete-todo-button"
        >
        Delete
      </button>
    `;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
function addButton() {
  const inputElem = document.querySelector(".js-input");
  const dateInputElement = document.querySelector(".js-dueDate");
  const name = inputElem.value;
  const dueDate = dateInputElement.value;
  if (name === "" || dueDate === "") {
    window.alert("Please Fill Both the Details");
  } else {
    myArray.push({
      //name:name,
      //dueDate:dueDate
      name,
      dueDate,
    });

    inputElem.value = "";
    dateInputElement.value = "";
    renderTodoList();
    saveToStorage();
  }
}
function saveToStorage() {
  localStorage.setItem("myArray", JSON.stringify(myArray));
}
