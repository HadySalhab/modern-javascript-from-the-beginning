class UI {
  constructor() {
    this.post = document.querySelector("#posts");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.forState = "add";
  }

  showPosts(posts) {
    let output = "";
    console.log("hello..............");

    posts.forEach(post => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fa fa-pencil"></i>
            </a>

            <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove"></i>
          </a>
          </div>
        </div>
      `;
    });

    this.post.innerHTML = output;
  }
  showAlert(message, className) {
    this.clearAlert();
    //Create Div
    const div = document.createElement("div");
    //Add Classes
    div.className = className;
    div.appendChild(document.createTextNode(message));

    //Get Parent
    const container = document.querySelector(".postsContainer");
    // Insert Alert
    container.insertBefore(div, this.post);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  //clear id hidden value
  clearIdInput() {
    this.idInput.value = "";
  }
  clearFields() {
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }
  //fill form to edit
  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState("edit");
  }
  //Change Form State
  changeFormState(type) {
    if (type === "edit") {
      this.postSubmit.textContent = "Update Post";
      this.postSubmit.className = "post-submit btn btn-warning btn-block";

      //Create Cancel Button
      //we could have created it in the html, and hide it with css
      const button = document.createElement("button");
      button.className = "post-cancel btn btn-light btn-block";
      button.appendChild(document.createTextNode("Cancel Edit"));

      //Get Parent
      const cardForm = document.querySelector(".card-form");

      //way 1
      //Get element to insert before
      const formEnd = document.querySelector(".form-end");
      //Insert cancel button
      cardForm.insertBefore(button, formEnd);

      //way 2
      //cardForm.appendChild(button);
    } else {
      this.postSubmit.textContent = "Post IT";
      this.postSubmit.className = "post-submit btn btn-primary btn-block";
      //Remove cancel btn if it is there
      if (document.querySelector(".post-cancel")) {
        document.querySelector(".post-cancel").remove();
      }
      //Clear Id From the Hidden Field
      this.clearIdInput();
      //Clear text
      this.clearFields();
    }
  }
}

export const ui = new UI();
