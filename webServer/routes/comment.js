const router = require('express').Router();
const CommentArt = require('../models/commentArt');

router.get('/all/comments', (req, res) => {
    CommentArt.find({})
    .then(rep => {
        console.log('all article : ');
        console.log(rep);
        res.send(rep)
    })
    .catch((err) => {
        //console.log(err);
        res.send({error2 : err})
      })

})

router.get('/comments/:uuidArt', (req, res) => {
    console.log('get all comment for an article : ' + req.params.uuidArt);
    CommentArt.find({articleUuid : req.params.uuidArt})
    .then(rep => {
        console.log('get comment article: ');
        console.log(rep.data);
        res.send(rep);
    })
    .catch((err) => {
        //console.log(err);
        res.send({error2 : err})
      })
    //CommentArt.find
    console.log('check for uuid : ');
})

/*
 * post a comment for a specific article
 * articleUuid
 * authorUuid
 * comment 
 */
router.post('/comment/:uuidArt', (req, res) => {
    //console.log('post a comment for an article');
    let tmp = req.body;

    console.log('comment post : ');
    console.log(req.body);
    console.log({
        articleUuid : req.params.uuidArt,
        authorUuid : '',
        comment : tmp.comment
    });
    let newComment = new CommentArt({
        articleUuid : req.params.uuidArt,
        authorUuid : '',
        comment : tmp.comment
    });

    console.log(' go save');
    console.log(newComment);

    newComment.save((err, doc) => {
        if (err){
          //console.log(err);
          console.log('fui error');
          console.log(err);
          res.status(404).send('error');
        }
        console.log('success add document');
        console.log(doc);
        //console.log('Document inserted succusfully');
        res.status(200).send('success add a comment ' + tmp.comment);
      });
})


module.exports = router;