const express = require('express');
const app = express();
const port = 4000; 

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
//extract styles and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router
app.use('/', require('./routes'));

app.use(express.static('./assets'));

//Setup our Views 
app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }  
    console.log(`Server is running on port ${2*4}`)
})