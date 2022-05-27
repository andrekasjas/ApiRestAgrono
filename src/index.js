const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('../router/index'));

var port = process.env.PORT || 3000 ;
app.listen(port);

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'templates/home.html'))
})