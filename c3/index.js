const express = require('express');
const handlers = require('./handlers');
//application object
let app = express();

//route
app.get("/",handlers.index);

app.get("/pero", handlers.pero);

app.get("/ime/:name", handlers.name);

app.get("/calc/:op/:a/:b", handlers.calc);

//starter
app.listen(8080, (err) => {
    if(err){
         console.log(err);
         return;
    }
    console.log('started server on port 8080')
});