const express = require('express');
const bodyParser = require('body-parser');
const students = require('./handlers/students');
const db = require('./db');
const cors = require('cors');

db.init();

const api = express();
api.use(bodyParser.json());
api.use(cors());

//get all students
api.get('/api/v1/students', students.getAll)
api.get('/api/v1/students/:id', students.getOne) //get single student by id
api.post('/api/v1/students', students.addOne) //create, add one student
api.put('/api/v1/students/:id', students.updateOne) //update one student
api.delete('/api/v1/students/:id', students.deleteOne) //delete student from database

api.listen(4040, (err)=>{
    if(err){
        return console.log(err)
    }
    console.log('api started on port 4040')
});