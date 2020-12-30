const express = require("express");
const app = express();


const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require("morgan");

//----------------------------------------

const database = require('./database');

const TagSchema = require("./models/Schema/Tag");

const Article = require('./models/article');
const Tag = require('./models/tag');

const article = require('./routes/article');
const tag = require('./routes/tag');
const comment = require('./routes/comment');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use('/', comment);
app.use('/', article);
app.use('/', tag);

//app.use(express.static('public/uploads'))
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));

app.get("/", (req, res) => {
  res.send("Hi i m alive!");
});

const server = app.listen(3042, () => 
{
  console.log('database connect');
  database.connect();
  console.log('let s go');
})
process.on("SIGTERM", () => {
  server.close(() => {
  });
});
