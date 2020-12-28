const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const Article = require('./models/article');
const Tag = require('./models/tag');
const TagSchema = require("./models/Schema/Tag");

const app = express();

const database = require('./database');

const article = require('./routes/article');
const tag = require('./routes/tag');
const comment = require('./routes/comment');

//const router = express.Router();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', comment);
app.use('/', article);
app.use('/', tag);

app.get("/", (req, res) => {
  res.send("Hi!");
});

const server = app.listen(3042, () => 
{
  //console.log('DB connection : ')
  database.connect();
  //console.log("Server ready");
})
process.on("SIGTERM", () => {
  server.close(() => {
    //console.log("Process terminated");
  });
});
