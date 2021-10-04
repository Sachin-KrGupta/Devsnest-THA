const express = require('express');
const path = require('path');

const app = express();

app.get('/images/:id',(req, res)=>{
    res.sendFile(path.join(__dirname + '/static/'+ req.params.id));
});

app.use('/pages/:id',(req, res)=>{
    res.sendFile(path.join(__dirname + '/views/'+ req.params.id + '.html'));
});

app.listen(3000,()=>{
    console.log("Server open on 3000")
})