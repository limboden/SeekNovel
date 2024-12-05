import { GraphQLContexts } from '../types/express/types'


const books = [];

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, { id }) => books.find(book => book.id === id),
  },
  Mutation: {
    addBook: (parent, { title, author }) => {
      const newBook = { id: `${books.length + 1}`, title, author };
      books.push(newBook);
      return newBook;
    },
    updateBook: (parent, { id, title, author }) => {
      const book = books.find(book => book.id === id);
      if (!book) return null;
      if (title) book.title = title;
      if (author) book.author = author;
      return book;
    },
    deleteBook: (parent, { id }) => {
      const index = books.findIndex(book => book.id === id);
      if (index === -1) return null;
      const deletedBook = books.splice(index, 1);
      return deletedBook[0];
    },
  },
};

module.exports = resolvers;

