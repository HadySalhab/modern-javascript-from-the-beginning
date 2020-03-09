//Object.prototype
//Person.prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calcAge = function() {
  //   const diff = Date.now() - this.birthday.getTime(); //milliseconds
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear - 1970);
  // };
}
//we moved whats common into the prototype.
Person.prototype.calcAge = function() {
  const diff = Date.now() - this.birthday.getTime(); //milliseconds
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear - 1970);
};

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
};

const john = new Person("John", "Doe", "8-12-90");
const mary = new Person("Mary", "Johnson", "March 20 1978");

console.log(mary);
console.log(john.calcAge());
console.log(mary.getFullName());

mary.getsMarried("SMITH");

console.log(mary.getFullName());

//hasOwnProperty is an Object prototype
console.log(mary.hasOwnProperty("firstName"));
