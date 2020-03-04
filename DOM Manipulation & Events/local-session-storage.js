//Set Local Storage Item
//localStorage.setItem("name", "John");
//localStorage.setItem("age", 30);

//Set Session Storage Item
// sessionStorage.setItem("name", "Beth");

// //remove from storage
// localStorage.removeItem("name");

// //get Item from the storage
// const name = localStorage.getItem("name"); //will return the associated value of this key
// const age = localStorage.getItem("age");

// //clear local storage
// localStorage.clear;

// console.log(name);

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const task = document.getElementById("task").value;

  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks")); //turning the string in array
  }
  tasks.push(task); //push, means put the element at the end of the array

  localStorage.setItem("tasks", JSON.stringify(tasks)); //stringify means, turning the array back to string
  alert("Task Saved");
});

const tasks = JSON.parse(localStorage.getItem("tasks"));
tasks.forEach(function(task) {
  console.log(task);
});

//STORAGE does not store string, so we have to turn the array into string using stringify , when we want to store
// and we have to JSON.parse(String) to turn it into array, if that is our demand
