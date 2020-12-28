const router = require('express').Router();
const Article = require('../models/article');

router.get("/articles", (req, res) => {
    //console.log('get all article');
    //let art = await Article.find({});
    Article.find({})
    .then((data) => {
      console.log(data);
      console.log(' end data');
      res.send(data);
    })
    .catch((err) => {
      //console.log(err);
      res.send({error2 : err})
    })
  });

  router.get('/article/:uuid', (req, res) => {
    Article.findById(req.params.uuid)
    .then(rep => {
      console.log('current article : ');
      console.log(rep);
      res.send(rep);
    })
    .catch(err => res.status(400).send({'error' : 'article not found'}))
  })
  
  router.post('/article', (req, res) => {
    console.log('article post : ');
    console.log(req.body);
    let art = new Article({
      title : req.body.title,
      description : req.body.description,
      img : req.body.img,
      tag : req.body.tag.filter(elem => elem !== '')
    });
  
    art.save((err, doc) => {
      if (err){
        //console.log(err);
        res.status(404).send('error');
      }
      //console.log('Document inserted succusfully');
      res.status(200).send('success');
    });
  })
  
  router.delete('/articles', (req, res) => {
    Article.remove().then(() => {
      //console.log('Success delete all article');
      res.status(200).send('success')
    })
    .catch(err => {
      res.status(400).send('fail');
    })
  })
  
  router.delete('/article', (req, res) => {
    //console.log('article : ' + req.body.uuid);
    let uuid = req.body.uuid;
    Article.findOneAndRemove({_id : uuid}, req.body, (err, data) => {
      //console.log('delete   ***');
      if (err) {
        res.status(400).send('error')
      }
      res.status(200).send('ok')
    })
  })

  module.exports = router;