// // CommonJS Module Syntax
// //const person = require("./mymodule1");

// //Es2015 Module
// //destructuring is supported
// // import { person, sayHello } from "./mymodule2";

// import * as mod from "./mymodule2";
// import greeting from "./mymodule2";

// console.log(mod.person.name);

// console.log(mod.sayHello());

// console.log(greeting);

/******************************************************** */

//Project
import { http } from "./http";
import { ui } from "./ui";

//Get Post ON DOM lOAD
document.addEventListener("DOMContentLoaded", getPosts);

//Listen for add post
document.querySelector(".post-submit").addEventListener("click", submitPost);

//Listen for Delete Post
document.querySelector("#posts").addEventListener("click", deletePost);

//Listen for edit state
document.querySelector("#posts").addEventListener("click", enableEdit);

//Listen for cancel
document.querySelector(".card-form").addEventListener("click", cancelEdit);
//Get post
function getPosts() {
  http
    .get("http://localhost:3000/posts")
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

//Submit Post
function submitPost() {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const id = document.querySelector("#id").value;

  const data = {
    title,
    body
  };
  if (title === "" || body === "") {
    ui.showAlert("Please fill in all fields", "alert alert-danger");
  } else {
    //check for id
    if (id === "") {
      //Create Post
      http
        .post("http://localhost:3000/posts", data)
        .then(data => {
          ui.showAlert("Post Added", "alert alert-success");
          ui.clearFields();
          getPosts(); //not like kotlin lambda where the last statement is the return of a lambda (this is not a return statememt here),
        })
        .catch(err => console.log(err));
      //create post
    } else {
      //Update the post
      http
        .put(`http://localhost:3000/posts/${id}`, data)
        .then(data => {
          ui.showAlert("Post Updated", "alert alert-success");
          ui.changeFormState("add");
          getPosts(); //not like kotlin lambda where the last statement is the return of a lambda (this is not a return statememt here),
        })
        .catch(err => console.log(err));
    }
  }
}

//Delete Post
function deletePost(e) {
  if (e.target.parentElement.classList.contains("delete")) {
    const id = e.target.parentElement.dataset.id;
    if (confirm("Are you sure")) {
      http
        .delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          ui.showAlert("Post Removed", "alert alert-success");
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }
  e.preventDefault();
}

//Enable edit state
function enableEdit(e) {
  if (e.target.parentElement.classList.contains("edit")) {
    const id = e.target.parentElement.dataset.id;
    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body
    };
    ui.fillForm(data);
  }
  e.preventDefault();
}

//Cancel Edit State
//event delegation, because cancel button is added at runtime
function cancelEdit(e) {
  if (e.target.classList.contains("post-cancel")) {
    ui.changeFormState("add");
  }
  e.preventDefault();
}
