//route handler
const index = (req,res) =>{
    res.send('ok');

}
const pero = (req,res) =>{
    res.send('Hi pero');

}
const name = (req,res) =>{
    res.send(req.params.name);

}

const calc = (req,res) =>{
    switch(req.params.op){
        case "add":
            var dat = (parseInt(req.params.a) + parseInt(req.params.b));
            break;

            case "mul":
            var dat = (parseInt(req.params.a) * parseInt(req.params.b));
            break;

            case "div":
            var dat =(parseInt(req.params.a) / parseInt(req.params.b));
            break;

            case "sub":
            var dat =(parseInt(req.params.a) - parseInt(req.params.b));
            break;
    }
    res.send(dat.toString());

   
}
const post =(req,res)=>{
    let pozdrav = `Zdravo ${req.body.ime} ${req.body.prezime}`;
    res.send(pozdrav);

}
module.exports = {
    index, 
    pero, 
    name,
    calc,
    post
};