const router = require('express').Router();
const Tag = require('../models/tag');

router.get('/tags', (req, res) => {
  
    Tag.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send({error : 'fuck'});
    })
  })
  
  router.delete('/tags', (req, res) => {  
    Tag.remove().then(() => {
      //console.log('Success delete all tags');
      res.status(200).send('success');
    })
    .catch((error) => {
      res.status(400).send({error : 'error'})
    })
  })
  
  router.delete('/tag', (req, res) => {
    let uuid = req.body.uuid;
    Tag.findOneAndRemove({_id : uuid}, req.body, (err, data) => {
      //console.log('delete   ***');
      if (err) {
        res.status(400).send('error')
      }
      res.status(200).send('ok')
    })
  })
  
  router.post('/tag', (req, res) => {
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

  module.exports = router;