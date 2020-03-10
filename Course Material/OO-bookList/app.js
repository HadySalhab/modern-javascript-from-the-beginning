//Book Constructor

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor
function UI() {}

//Add Book To UI
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");

  //Create table Row
  const row = document.createElement("tr");
  //Insert Row
  row.innerHTML = `
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td><a href="#" class="delete">X<a></td>
   `;
  list.appendChild(row);
  console.log(row);
};

//Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

//Evenet Listeners
document.getElementById("book-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  //Instantiate book
  const book = new Book(title, author, isbn);
  //Instantiate UI
  const ui = new UI();
  ui.addBookToList(book);

  //Clear Fields
  ui.clearFields();
  //Add book to list
  console.log(title, author, isbn);
});
