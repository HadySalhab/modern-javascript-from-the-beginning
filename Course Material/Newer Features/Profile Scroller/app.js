//usually data comes from apis, but we will hard coded it in this example
const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/40.jpg"
  },
  {
    name: "Willian Johnson",
    age: 38,
    gender: "male",
    lookingfor: "female",
    location: "Lynn MA",
    image: "https://randomuser.me/api/portraits/men/83.jpg"
  }
];
const profiles = profileIterator(data);
//Call first profile
nextProfile();

//Next Event
document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile) {
    document.getElementById("profileDisplay").innerHTML = `
  <ul class="list-group">
  <li class="list-group-item">Name:${currentProfile.name}</li>
  <li class="list-group-item">Age:${currentProfile.age}</li>
  <li class="list-group-item">Location:${currentProfile.location}</li>
  <li class="list-group-item">Preference:${currentProfile.gender}</li>
  <li class="list-group-item">Looking For:${currentProfile.lookingfor}</li>
  </ul>
  `;
    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}"></img>`;
  } else {
    location.reload();
  }
}

//Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
