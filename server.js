'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // bring in Mongoose.
const book = require('./models/book')
mongoose.connect(process.env.DB_URL);
const verifyUser = require('./auth');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});


const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/test', (request, response) => {
  response.send('test request received')
})

app.get('/books', getBooks);
app.post('/books', postBooks);
app.delete('/books/:id', deleteBook);
app.put('/books/:id', putBook);



async function getBooks(req, res, next) {
  verifyUser(req, async (err, user) => {
    if (err) {
      console.error(err);
      res.send('invalid token');
    } else {
  try {
    // console.log(req)
    let queryObject = {};
    if (req.query.email) {
      queryObject.email = req.query.email;
      console.log(queryObject);
    }
    let results = await book.find(queryObject);
    // console.log(results)
    res.status(200).send(results);
  } catch (error) {
    next(error);
  };
}
});
}

async function postBooks(req, res, next) {
  console.log(req.body); // contains title, desc, author, email
  try {
    let newBook = await book.create(req.body);
    res.status(200).send(newBook);
  } catch (error) {
    next(error);
  }
}

async function deleteBook(req, res, next) {
  // REST verb DELETE // Mongoose Model.findByIdAndDelete()
  let id = req.params.id;
  try {
    console.log(id);
    await book.findByIdAndDelete(id);
    res.send('book deleted');
  } catch (error) {
    next(error);
  }
}

async function putBook(req, res, next) {
  // REST verb PUT // Mongoose Model.findByIdAndUpdate
  try {
    let id = req.params.id;
    let updatedBook = await book.findByIdAndUpdate(id, req.body, { new: true, overwrite: true });
    res.status(200).send(updatedBook);
  } catch (error) {
    next(error);
  }
}

app.get('*', (request, response) => {
  response.status(404).send('Page Doesn\'t Exist');
})

// error
app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
