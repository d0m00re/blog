const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const Article = require('./models/article');
const Tag = require('./models/tag');
const TagSchema = require("./models/Schema/Tag");

const article = require('./routes/article');

const app = express();
const router = app.Router();

const database = require('./database');

//const router = express.Router();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hi!");
});

router.use('/article', require('./routes/article'));

app.get('/tags', (req, res) => {
  
  Tag.find({})
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(400).send({error : 'fuck'});
  })
})

app.delete('/tags', (req, res) => {  
  Tag.remove().then(() => {
    //console.log('Success delete all tags');
    res.status(200).send('success');
  })
  .catch((error) => {
    res.status(400).send({error : 'error'})
  })
})

app.delete('/tag', (req, res) => {
  let uuid = req.body.uuid;
  Tag.findOneAndRemove({_id : uuid}, req.body, (err, data) => {
    //console.log('delete   ***');
    if (err) {
      res.status(400).send('error')
    }
    res.status(200).send('ok')
  })
})

app.post('/tag', (req, res) => {
  //console.log('tag : ');
  //console.log(req.body);
  let tag = new Tag({
    name : req.body.name
  });
  
  tag.save((err, doc) => {
    if (err){
      //console.log(err);
      res.status(404).send('error');

    }
    //console.log('Document inserted succusfully');
    res.status(200).send('success');
  })
})

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
