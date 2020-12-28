const assert = require('assert');
const Article = require('../models/article');

// Describe our tests
describe('Updating records', function(){
  var char;
  // Add a character to the db before each tests
  beforeEach(function(done){
    char = new Article({
      title : 'Mario',
      desc : 'john'
    });
    char.save().then(function(){
      done();
    });
  });

  // Create tests
  it('Updates the name of a record', function(done){
      Article.findOneAndUpdate({title: 'Mario'}, {title: 'Luigi'}).then(function(){
          Article.findOne({_id: char._id}).then(function(result){
              assert(result.title === 'Luigi');
              done();
          });
      });
  });


});

/*
it('Adds 1 to the weight of every record', function(done){
    MarioChar.update({}, { $inc: { weight: 1 } }).then(function(){
        MarioChar.findOne({name: 'Mario'}).then(function(record){
            assert(record.weight === 51);
            done();
        });
    });
 });

*/