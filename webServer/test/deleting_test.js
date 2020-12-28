const assert = require('assert');
const Article = require('../models/article');

// Describe our tests
describe('Deleting records', function(){
  var char;
  // Add a character to the db before each tests
  beforeEach(function(done){
    char = new Article({
        title : 'test',
        description : 'desc'
    });
    char.save().then(function(){
      done();
    });
  });

  // Create tests
  it('Deletes a record from the database', function(done){
    Article.findOneAndRemove({title : 'miaou'}).then(() => {
      Article.findOne({title : 'miaou'}).then((result) => {
        assert(result === null);
        done();
      });
    });
  });

});