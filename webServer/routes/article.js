const router = require("express").Router();
const Article = require("../models/article");
const multer = require("multer");
const path = "./public/uploads";
const uuid = require("uuid");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, uuid.v4() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb("Type file is not access", false);
  }
};

var upload = multer({ storage, fileFilter }).single("file");

router.post("/upload", function (req, res) {
  console.log("go upload img : ");
  console.log(req.body);

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

router.post("/upload2", function (req, res) {
  console.log("go upload img : ");
  console.log(req.body);

  return 0;

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

router.get("/articles", (req, res) => {
  Article.find({})
    .then((data) => {
      console.log(data);
      console.log(" end data");
      res.send(data);
    })
    .catch((err) => {
      //console.log(err);
      res.send({ error2: err });
    });
});

router.get("/article/:uuid", (req, res) => {
  Article.findById(req.params.uuid)
    .then((rep) => {
      console.log("current article : ");
      console.log(rep);
      res.send(rep);
    })
    .catch((err) => res.status(400).send({ error: "article not found" }));
});

router.post("/article", (req, res) => {
    console.log("check article");
   

    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
          return res.status(500).json(err)
      } else if (err) {
          return res.status(500).json(err)
      }
      console.log("data : ");
    console.log(req.body);
    console.log(req.body.test);
    console.log(req.file);
    console.log("-----");

    let art = new Article({
      title: req.body.title,
      description: req.body.description,
      img: req.file.path,
      tag: JSON.parse(req.body.tag).filter((elem) => elem !== ""),
    });
    console.log('article : ');
    console.log(art);

    art.save((err, doc) => {
      if (err) {
        //console.log(err);
        res.status(404).send("error");
      }
      //console.log('Document inserted succusfully');
      res.status(200).send("success");
    });
  })

    /*
    console.log('go upload img : ');
    console.log(req.body);
 
    return 0;
    
   upload(req, res, function (err) {
          if (err instanceof multer.MulterError) {
              return res.status(500).json(err)
          } else if (err) {
              return res.status(500).json(err)
          }
     return res.status(200).send(req.file)
   })
   */
  });

router.post("/article2", (req, res) => {
  console.log("article post : ");
  console.log(req.body);
  let art = new Article({
    title: req.body.title,
    description: req.body.description,
    img: req.body.img,
    tag: req.body.tag.filter((elem) => elem !== ""),
  });

  art.save((err, doc) => {
    if (err) {
      //console.log(err);
      res.status(404).send("error");
    }
    //console.log('Document inserted succusfully');
    res.status(200).send("success");
  });
});

router.delete("/articles", (req, res) => {
  Article.remove()
    .then(() => {
      //console.log('Success delete all article');
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(400).send("fail");
    });
});

router.delete("/article", (req, res) => {
  //console.log('article : ' + req.body.uuid);
  let uuid = req.body.uuid;
  Article.findOneAndRemove({ _id: uuid }, req.body, (err, data) => {
    //console.log('delete   ***');
    if (err) {
      res.status(400).send("error");
    }
    res.status(200).send("ok");
  });
});

module.exports = router;
