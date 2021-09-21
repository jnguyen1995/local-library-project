function findAuthorById(authors, id) {
  const authorSearch = authors.find((author) => author.id == id);
  return authorSearch;
}

function findBookById(books, id) {
  const bookSearch = books.find((book) => book.id == id);
  return bookSearch;
}

function partitionBooksByBorrowedStatus(books) {
  const booksReturned = books.filter((book) => book.borrows[0].returned);
  const booksCheckedOut = books.filter((book) => !book.borrows[0].returned);
  return [booksCheckedOut, booksReturned];
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  const borrowers = borrows.map(({ id, returned }) => {
    const account = accounts.find((account) => account.id === id);
    return {
      ...account,
      returned,
    };
  });
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
