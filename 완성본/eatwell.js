const path = require('path');
const express = require('express');

const app = express();

app.get('/', function(req, res) {
    const htmlFilePath = path.join(__dirname, 'Eatwell.html');
    res.sendFile(htmlFilePath);
})

app.get('/Restaurants', function(req, res) {
    const htmlFilePath = path.join(__dirname, 'Restaurants.html');
    res.sendFile(htmlFilePath);
})

app.get('/recommend', function(req, res) {
    const htmlFilePath = path.join(__dirname, 'recommend.html');
    res.sendFile(htmlFilePath);
})

app.get('/about', function(req, res) {
    const htmlFilePath = path.join(__dirname, 'about.html');
    res.sendFile(htmlFilePath);
})

app.get('/confirm', function(req, res) {
    const htmlFilePath = path.join(__dirname, 'confirm.html');
    res.sendFile(htmlFilePath);
})

app.listen(3000);
