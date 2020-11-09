const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codeial_development');
const db = mongoose.connection;

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

db.on('error', console.error.bind(console,'Error connecting to MongoDB'));
db.once('open', function(){
    console.log('Connected to Data Base:: MongoDB');
})