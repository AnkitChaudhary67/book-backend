
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    ISBN: String,
    publisher: String,
    publishedDate: String,
    description: String,
});

module.exports = mongoose.model("books", bookSchema);