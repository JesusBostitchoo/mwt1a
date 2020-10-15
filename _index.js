const express = require('express');
const app = express();
//app.use(express.static('/img'));
app.use('/img',express.static(__dirname+'/img'));


app.get('/',(req, res) => {
    //res.send('hola mundo');
    res.sendFile('index.html', {root:__dirname});
});



app.listen(3000,()=>{
    console.log("server on port 3000");



});