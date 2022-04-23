const express = require('express')
const app = express()
const mysql = require('mysql');
let path = require('path');

app.engine('html', require('ejs').renderFile);


app.use(express.static('public/html'));
app.use(express.static('public/images'));
app.use(express.static('public/css'));


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));

app.listen(3000, () => console.log('Server running on port 3000'));
