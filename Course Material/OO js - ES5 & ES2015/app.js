/*Object literals*/
//allows us to create one instance of an object

const brad = {
  name: "brad",
  age: 30
};

console.log(brad);

console.log(brad.age);

//constructor
function Person(name, age, dob) {
  this.name = name;
  this.age = age;
  this.birthday = new Date(dob);
  this.calcAge = function() {
    const diff = Date.now() - this.birthday.getTime(); //milliseconds
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear - 1970);
  };
  console.log(this);
}

console.log(this); //this inside the global scope, refers to the window object

const brad = new Person("Brad", 36, "9-10-1981");
const john = new Person("John", 30, "9-10-1993");

console.log(brad);
console.log(brad.age);
console.log(john);
console.log(john.age);

console.log(brad.calcAge());
