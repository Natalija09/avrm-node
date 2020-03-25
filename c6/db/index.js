const mongoose = require('mongoose')

const username = 'dev';
const password = 'natalija09'
const host = 'cluster0-ppcd0.mongodb.net';
const dbname = 'ecommence'

const cstring = `mongodb+srv://dev:natalija09@cluster0-ppcd0.mongodb.net/test?retryWrites=true&w=majority`

const init = () =>{
    mongoose.connect(cstring,
        {
        useNewUrlParser:true, useUnifiedTopology:true

    },
    (err)=>{
        if(err){
            return console.log(err)
        }
        console.log('DB connection success')

    }
        
        
        )
}


module.exports={
    init
};