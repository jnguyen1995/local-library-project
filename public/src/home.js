function helper(result) {
  const output = result.reduce((accumulator, res) => {
    let authorName = res.name;
    let found = accumulator.find((elem) => elem.name === authorName);
    if (found) found.count += res.count;
    else accumulator.push(res);
    return accumulator;
  }, []);
  return output;
}
function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksBorrowed = books.filter((book) => {
    return book.borrows[0].returned == false;
  });
  return booksBorrowed.length;
}

function getMostCommonGenres(books) {
  const genres = books.map((book) => book.genre);
  let arr = [];
  genres.forEach((genre) => {
    const found = arr.find((element) => element.name === genre);
    if (!found) {
      arr.push({ name: genre, count: 1 });
    } else {
      found.count++;
    }
    return arr;
  });
  arr.sort((a, b) => b.count - a.count);
  return arr.slice(0, 5);
}

function getMostPopularBooks(books) {
  let result = [];
  books.forEach((book) => {
    let borrowed = book.borrows;
    result.push({ name: book.title, count: borrowed.length });
  });
  result.sort((a, b) => b.count - a.count);
  console.log(result);
  return result.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    firstName = author.name.first;
    lastName = author.name.last;
    books.forEach((book) => {
      let borrowed = book.borrows;
      if (book.authorId == author.id) {
        result.push({
          name: `${firstName} ${lastName}`,
          count: borrowed.length,
        });
      }
    });
  });
  let output = helper(result);
  output.sort((a, b) => b.count - a.count);
  return output.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
