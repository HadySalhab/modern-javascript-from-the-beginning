class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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
  }

  showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    //Add Text

    div.appendChild(document.createTextNode(message));
    //GET PARENT
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    //Insert the alert
    container.insertBefore(div, form);
    //Timeout after 3 seconds
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 3000);
  }
  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
      this.showAlert(`Book Removed`, `success`);
    }
  }
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

//Local Storage Class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(function(book) {
      const ui = new UI();
      ui.addBookToList(book);
    });
  }
  static AddBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  static RemoveBook(isbn) {
    console.log(isbn);
    books.forEach(function(book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

//DOM LOAD EVENT
document.addEventListener("DOMContentLoaded", Store.displayBooks);

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
  //Validate
  if (title === "" || author === "" || isbn === "") {
    //Error Alert
    ui.showAlert("Please fill in all fields", "error");
  } else {
    //Add book to list
    ui.addBookToList(book);

    //Add book to ls
    Store.AddBook(book);

    //Show success
    ui.showAlert("Book added", "success");

    //Clear Fields
    ui.clearFields();
  }

  //Add book to list
  console.log(title, author, isbn);
});

document.querySelector("#book-list").addEventListener("click", function(e) {
  e.preventDefault();
  const ui = new UI();
  ui.deleteBook(e.target);
  //Remove from local storage

  Store.RemoveBook(e.target.parentElement.previousElementSibling.textContent);
});
