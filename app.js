const fs = require('fs');
const path = require('path');
const express = require('express');
const uuid = require('uuid');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res) {
    res.render('Eatwell');
})

app.get('/Restaurants', function(req, res) {
    const filePath = path.join(__dirname, 'data', 'restaurants.json');

    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);
    res.render('Restaurants', {numberOfRestaurants: storedRestaurants.length, restaurants: storedRestaurants});
})

app.get('/Restaurants/:id', function(req, res) {
    const restaurantId = req.params.id;
    res.render('Restaurants-detail', {rid: restaurantId});
})

// app.get('/Restaurants/:website', function(req, res) {
//     const restaurantWebsite = req.params.website;
//     res.render('Restaurants-detail', {site: restaurantWebsite});
// })

app.get('/recommend', function(req, res) {
    res.render('recommend');
})

app.post('/recommend', function(req, res) {
    const restaurant = req.body;
    restaurant.id = uuid.v4();
    const filePath = path.join(__dirname, 'data', 'restaurants.json');

    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    storedRestaurants.push(restaurant);

    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

    res.redirect('/confirm');
})

app.get('/about', function(req, res) {
    res.render('about');
})

app.get('/confirm', function(req, res) {
    res.render('confirm');
})

app.listen(3000);
