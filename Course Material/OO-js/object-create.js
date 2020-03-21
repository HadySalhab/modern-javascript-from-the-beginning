const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  changeLastName: function(newLastName) {
    this.lastName = newLastName;
  }
};

// Syntax #1
const line = Object.create(personPrototypes);
line.firstName = "Line";
line.lastName = "Romanos";
line.age = 30;

console.log(line.greeting());

line.changeLastName("Salheb");
console.log(line);
console.log(line.lastName);

// Syntax #2
const eva = Object.create(personPrototypes, {
  firstName: { value: "Eva" },
  lastName: { value: "Romanos" },
  age: { value: 35 }
});

console.log(eva);
console.log(eva.greeting());
