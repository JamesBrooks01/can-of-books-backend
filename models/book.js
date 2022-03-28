'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  email: { type: String, required: true }
});

const BookModel = mongoose.model('book', BookSchema);

module.exports = BookModel;
