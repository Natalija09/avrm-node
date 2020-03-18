const mongoose = require('mongoose');

//mongodb+srv://dev:<password>@cluster0-ppcd0.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://dev:natalija09@cluster0-ppcd0.mongodb.net/ecommence?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err)=>{
    if(err){
        console.log("could not connect to database");
        console.log(err);
    }
    return;
}
);

const Users = mongoose.model(
    'users',
    {
        name:String,
        email:String,
        location:{
            city:String,
            adress:String,
            number:String,
            country:String
        },
        password:String


    },
    'users'
);
const Products = mongoose.model(
    'products',
    {
        name:String,
        cena:String,
        market: String,
        sostav: String
    },
    'products'
);
//read
Users.find({}, (err,data)=>{
    if(err){
        return console.log(err);

    }
    console.log(data);
});
Products.find({}, (err,data)=>{
    if(err){
        return console.log(err);

    }
    console.log(data);
});
//create

let u = new Users({
    name: "Bube Perovski",
    email: "bube@perovski.com",
    location: {
        city:"Skopje",
        adress:"Buuuube",
        number:"bb",
        country:"Macedonia"
    },
    password: "ebub123"

});
let p = new Products({
    name: "marmelad od slivi",
    cena: "80 denari",
    market: "Stokomak",
    sostav: "lorem ipsum"
});

u.save((err)=>{
    if(err){
        return console.log(err)
    }
});
p.save((err)=>{
    if(err){
        return console.log(err)
    }
});

//update
Users.updateOne(
    {_id:'5e721ed0fe8187837e4e79f8'},
    {
        email:'natapetreska@gmail.com',
        password: 'test100'
    },
    (err)=>{
        if(err){
            return console.log(err);
        }
        console.log('User update successful')
    }
);

Products.updateOne(
    {_id:'5e723fcbfe8187837e5dc715'},
    {
        cena:'160 denari',
        market:'Tinex'
    },
    (err)=>{
        if(err){
            return console.log(err);
        }
        console.log('Product update successful')
    }
);

//delete

Users.deleteOne({_id:'5e722020fe8187837e4ee8b9'}, (err) =>{
if(err){
    return console.log(err);
}
console.log('User deleted successfuly')
});


Products.deleteOne({_id:'5e72428200bab22368cfe46f'}, (err)=>{
    if(err){
        return console.log(err);
    }
    console.log('Product deleted successfully')

});