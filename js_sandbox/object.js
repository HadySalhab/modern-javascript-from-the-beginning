const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 30,
  email: "Steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    //nested object
    city: "Miami",
    state: "Fl"
  },
  getBirthYear: function() {
    return 1984 - this.age;
  }
};
let val;
val = person;

val = person;
//get specific value
val = person.firstName; //way1 (recommended)
val = person["firstName"]; //way2
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address.state;
val = person.address["city"];
val = person.getBirthYear();
console.log(val);

//array of objects
const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 23 },
  { name: "Nance", age: 18 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
