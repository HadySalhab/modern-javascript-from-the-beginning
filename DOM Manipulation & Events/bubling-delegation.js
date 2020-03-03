//EVENT BUBBLING
//an event on a child element will buble up and fire the event listener of all of its parent
// document.querySelector(".card-title").addEventListener("click", function() {
//   console.log("card title");
// });

// document.querySelector(".card-content").addEventListener("click", function() {
//   console.log("card content");
// });
// document.querySelector(".card").addEventListener("click", function() {
//   console.log("card");
// });

// document.querySelector(".col").addEventListener("click", function() {
//   console.log("col");
// });

//EVENT DELEGATION
// const deItem = document.querySelector(".delete-item");
// deleteItem.addEventListener("click", deleteItem);

document.body.addEventListener("click", deleteItem);

//add listener to the body, and delegate it to a specific children, using the if statement
function deleteItem(e) {
  //className has to match all the classes being assigned to the element
  // for the if statement to fire
  // if (e.target.parentElement.clasName === "delete-item secondary-content")  {
  //   console.log("delete item");
  // }

  //when we click on the x , the target here is the icon inside the anchor tag and not the anchor itself
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }
}
