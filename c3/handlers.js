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
module.exports = {
    index, 
    pero, 
    name
};