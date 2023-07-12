let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookFromLibrary(book) {
  myLibrary = myLibrary.filter((b) => b !== book);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getRandomString() {
  return Math.random().toString(32);
}

const addBookBtn = document.getElementById("add-book-btn");
const bookCollection = document.getElementById("book-collection");

const addBookCard = (book) => {
  const bookCard = document.createElement("li").classList.add("book-card");
  const bookTitle = document.createElement("p").classList.add("book-title");
  const bookAuthor = document.createElement("p").classList.add("book-author");
  const bookPages = document.createElement("p").classList.add("book-pages");
  const bookRemoveBtn = document.createElement("button");

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;
  bookRemoveBtn.textContent = "Remove book";
  bookRemoveBtn.onclick = removeBook;

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRemoveBtn);

};

const addNewBook = (e) => {
  e.preventDefault();
  const book = new Book(
    getRandomString(),
    getRandomString(),
    getRandomInt(10000)
  );
  addBookToLibrary(book);
};

addBookBtn.onclick = addNewBook;
