const express = require('express')
const bodyParser = require('body-parser')
const handlers = require('./handlers')

let app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/ime/:ime/prezime/:prezime', handlers.name)
app.get('/',handlers.index)



app.listen(8080,(err) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log("server is on 8080")
})