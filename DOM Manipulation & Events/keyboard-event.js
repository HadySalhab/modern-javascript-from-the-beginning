const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");

taskInput.value = ""; //clear the form

// form.addEventListener("submit", runEvent);
//Keydown
taskInput.addEventListener("keydown", runEvent);

//keyup
taskInput.addEventListener("keyup", runEvent);

//keypress
taskInput.addEventListener("keypress", runEvent);

//focus
//for example, when you click on the form and it takes the focus
taskInput.addEventListener("focus", runEvent);

//Blur
//for example, when you click outside of the form and loses focus
taskInput.addEventListener("blur", runEvent);

//Cut (ctrl+x)
//for example, when you right-click text in the form and cut the text
taskInput.addEventListener("cut", runEvent);

//Paste
//ctrl+V
taskInput.addEventListener("paste", runEvent);

//Input
//anything we do with this input, will gonna fire
taskInput.addEventListener("input", runEvent);

//Change (works if we have a spinner and we are changing the value)
//select.addEventListener('change',runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  // console.log(e.target.value); //we get the value -> what we are typing
  // heading.innerText = e.target.value;

  //get input value
  //   console.log(taskInput.value);
  //   e.preventDefault();
  //
}
