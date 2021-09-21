function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last.localeCompare(accountB.name.last)
  );
}

function getTotalNumberOfBorrows(account, books) {
  const userID = account.id;
  return books.reduce((acc, book) => {
    const currentID = book.borrows;
    currentID.filter((idObj) => (idObj.id === userID ? acc++ : false));
    return acc;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksCheckedOut = books.filter((book) => {
    return book.borrows.some((borrow) => {
      return !borrow.returned && borrow.id == account.id;
    });
  });
  booksCheckedOut.forEach((book) => {
    book.author = authors.find((author) => book.authorId == author.id);
  });
  return booksCheckedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
