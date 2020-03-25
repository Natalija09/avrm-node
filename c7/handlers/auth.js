const authValidator = require('../validators/auth');
const validator = require('node-input-validator');
const userModel = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const register = (req,res)=>{
    let v = new validator.Validator(req.body, authValidator.register);
    v.check()
    .then(match =>{
        if(match){
            if(req.body.password !== req.body.password2){
                throw "Passwords dont match";
            }
            userModel.getByEmail(req.body.email)
            .then(data =>{
                if(!data){
                
                bcrypt.genSalt(10,function(err,salt){
                    bcrypt.hash(req.body.password, salt, (err,hash)=>{
                        let u ={
                            full_name: req.body.full_name,
                            email: req.body.email,
                            password: hash
                        }
                        return userModel.save(u)
                    });
                    
                });
            }else{
                throw "Duplicate user";
            }
            }).then(() =>{
                res.status(201).send('created');
            })
            .catch(err =>{
       console.log(err);
       res.status(400).send('bad request')

    })

    .catch(err =>{
        console.log(err);
        res.status(400).send('bad request')
    })

} else {
    throw 'Validation failed';
}
    })
    .catch(err=>{
        console.log(err);
        res.send(v.errors)
    });
};

const login = (req, res)=>{
    let v = new validator.Validator(req.body, authValidator.login);
    v.check()
    .then(match =>{
        if(!match){
            throw "validation failed"
        }
        return userModel.getByEmail(req.body.email)
    })

    
    .then(data=>{
        if(!data){
            throw "user not found"
        }
        if(!bcrypt.compareSync(req.body.password, data.password)){
            throw 'bad username or password'
        }
        let tokenData = {
            uid: data_id,
            full_name: data.full_name
        };
        let token = jwt.sign(tokenData, 'tajna123');
        res.status(200).send({jwt:token})

    })
    .catch(err =>{
        res.status(500).send(err)

    });

};
const privateTest = (req,res) =>{
    res.send(req.user)
};
const publicTest = (req,res) =>{
    res.send('hello from public')
};


module.exports = {
    register,
    login,
    privateTest,
    publicTest
};