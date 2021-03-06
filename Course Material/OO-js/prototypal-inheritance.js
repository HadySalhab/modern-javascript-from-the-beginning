function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function() {
  return `hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe");

console.log(person1.greeting());

function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

//Inherit The Person prototype methods
//like extending a class
Customer.prototype = Object.create(Person.prototype);

//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard");

//Overriding the greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName} welcome to the company`;
};

//we can add a unique function for Customer
Customer.prototype.greetin2 = function() {
  return `Hello unique customer`;
};

console.log(customer1);
console.log(person1);

//Customer extends Person
//Person extends Supertype Object
