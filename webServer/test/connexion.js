const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the db before tests run (mongoose hook)
before((done) => {
    mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true,  useUnifiedTopology: true});

    mongoose.connection.once('open', () => {
        //console.log('Connection has been made, now make fireworks ...');
        done();
    }).on('error', (err) =>
        //console.log('Connexion error: ' + err));    
})

// Drop the characters collection before each test
beforeEach((done) => {
    mongoose.connection.collections.articles.drop();
    done();
})