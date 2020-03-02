document.querySelector(".clear-tasks").addEventListener("click", function(e) {
  console.log("Hello World");
  e.preventDefault(); //if the link being click does open another page, this will prevent it
});

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  console.log("Clicked");

  let val;

  val = e; //we get the information about the event, most important info is the 'Target'

  //Event Target Element
  //which element this event being applied on
  // we can change anything we want on this target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  e.target.innerText = "Hello";

  //Event Type
  val = e.type; //Click Event

  //TimeStamp
  val = e.timeStamp;

  //Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  //Coords event relative to the element itself
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
