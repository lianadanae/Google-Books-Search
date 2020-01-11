const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookId: {
    type: String
  },
  title: {
    type: String
  },
  authors: {
    type: Array
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  }
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;