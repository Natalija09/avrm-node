var fs = require('fs')

fs.readFile('lica.json', 'utf8',(err,data)=>{
    if(err) throw err;
    const students = JSON.parse(data);
    console.log(students);
    var studentArray = [];
    students.forEach(e => studentArray.push(e.ime + ' ' + e.prezime + '<br>'));
    return flatArray = studentArray.join('');

});
const name = (req,res) => {
    res.send(ew .params.ime + ('' )+ req.params.prezime);
};
const index =(req,res)=>{
    res.send(flatArray);
};

module.exports = {
    name,
    index
}