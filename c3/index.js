const express = require('express');
const handlers = require('./handlers');
//application object
let app = express();

//route
app.get("/",handlers.index);

app.get("/pero", handlers.pero);

app.get("/ime/:name", handlers.name);

//starter
app.listen(8080);