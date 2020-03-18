const searchUser = document.getElementById("searchUser");
const github = new Github();
//init ui
const ui = new UI();
searchUser.addEventListener("keyup", e => {
  //Get input text
  const userText = e.target.value;

  if (userText !== "") {
    //data is a js object
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        console.log(data.profile);
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
