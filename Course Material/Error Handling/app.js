const user = { email: "jdoe@gmail.com" };
try {
  // eval("Helloooo");
  // myFunction();
  // null.myFunction();

  //URI error
  // decodeURIComponent("%");
  if (!user.name) {
    // throw "User Has No Name";
    throw new SyntaxError("User Has No Name");
  }
} catch (e) {
  console.log(e);
  console.log(`${e.name}: error...`);
  console.log(e.message);
  console.log(e instanceof ReferenceError);
  console.log(e instanceof TypeError);
} finally {
  console.log("Finally Block runs regardless of result...");
}

console.log("Program Continues...");
