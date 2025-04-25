function Book(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isBorrowed = false;
    this.borrow = function () {
        this.isBorrowed = true;
    };
    this.returnBook = function () {
        this.isBorrowed = false;
    };
}

function Library() {
    this.books = [];
    this.addBook = function(book) {
        this.books.push(book);
    };
    this.findBookByISBN = function(isbn) {
        return this.books.find(book => book.ISBN === isbn);
    };
    this.listAvailableBooks = function() {
        return this.books.filter(book => !book.isBorrowed);
    };
    this.listBorrowedBooks = function() {
        return this.books.filter(book => book.isBorrowed);
    };
}