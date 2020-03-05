const taskForm = document.getElementById("task-form");
const taskFormInput = document.getElementById("task");
const taskList = document.querySelector(".collection");
const filterFormInput = document.getElementById("filter");

filterFormInput.addEventListener("keyup", filter);
taskForm.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);

//Add task to the list when user submit
function addTask(e) {
  e.preventDefault();
  if (taskFormInput.value === "") {
    alert("Please Insert Some Task Before submitting");
    return;
  } else {
    const li = createTaskListItem(taskFormInput.value);
    const link = createTaskListItemLink();
    li.appendChild(link);
    taskList.appendChild(li);
    clearFormInputText();
  }
}

//Function to create the List Item
function createTaskListItem(text) {
  const li = document.createElement("li");
  li.className = "collection-item";
  li.appendChild(document.createTextNode(text));
  return li;
}

//Function to Create the Link
function createTaskListItemLink() {
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  return link;
}

function clearFormInputText() {
  taskFormInput.value = "";
}

//Remove task from the DOM when the user click the x icon
function removeTask(e) {
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
  }
}

function filter(e) {
  console.log(e.target.value);
}
