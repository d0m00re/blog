const mongoose = require('mongoose');

const dbName = 'blog';

const database = {};

database.connect = () => {
    mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true,  useUnifiedTopology: true});
  
    mongoose.connection.once('open', () => {
        console.log('Connection has been made, now make fireworks ...');
    }).on('error', (err) =>
        console.log('Connexion error: ' + err));    
  };

module.exports = database;