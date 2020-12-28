const mongoose = require('mongoose');
//mongoose.connect('mongodb://0.0.0.0:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

//const Cat = mongoose.model('Cat', { name: String });

// mongo connect - create db if don t exist
mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true, useUnifiedTopology: true } );

// once : event listener
mongoose.connection.once('open', () => {
    //console.log('success connection');
}).on('error', (err) => {
    //console.log('error');
    //console.log(err);
})