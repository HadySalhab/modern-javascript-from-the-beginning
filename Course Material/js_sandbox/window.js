//WINDOW METHODS/OBJECTS/PROPERTIES
console.log(123);

//Alert
// window.alert("hello world");

//alert("hello world");

//Prompt
// const input = prompt();
// alert(input);

//Confirm
// if (confirm("Are you sure?")) {
//   console.log("YES");
// } else {
//   console.log("No");
// }

let val;

//Outer height and width
val = window.outerHeight; //get the height of the window
val = window.outerWidth; //get the width of the window

//Inner height and width
val = window.innerHeight; //ex: remove the console height if opened
val = window.innerWidth; //ex: remove the size of scrollbar if available

//Scroll points
//tells the scrolling point we are @
val = window.scrollY;
val = window.scrollX;

//Location Object
val = window.location; //many information
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// //Redirect
// window.location.href = "http://google.com"; //opens google page
// //Reload
// window.location.reload();

//History Object
// window.history.go(-1); //goes back one page in the history
// val = window.history.length; //total pages in the history

//Navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;
console.log(val);
