const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// //Click
// clearBtn.addEventListener("click", runEvent);

//Double Click
// clearBtn.addEventListener("dblclick", runEvent);

//Mousedown
//when pressing
clearBtn.addEventListener("mousedown", runEvent);

//Mouseup
// //when releasing
// clearBtn.addEventListener("mouseup", runEvent);

// //Mouseenter
// //when you enter the card
// card.addEventListener("mouseenter", runEvent);

// //Mouseleave
// //when you leave the card
// card.addEventListener("mouseleave", runEvent);

// //Mouseover
// //when you go over an element inside the card
// card.addEventListener("mouseover", runEvent);

// //Mouseout
// //when you go out of an element inside the card
// card.addEventListener("mouseout", runEvent);

//Mousemove
//any movement inside the card
card.addEventListener("mousemove", runEvent);

//Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgba(${e.offsetX},${e.offsetY},${e.offsetY})`;
}
