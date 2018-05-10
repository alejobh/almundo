const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

var hotelsHelper = require('../mockReader');
router.use(bodyParser.urlencoded({ extended: true }));

// RETURNS ALL THE HOTELS IN THE DATABASE
router.get('/', function (req, res) {
  const stars = req.query.stars || 0;
  
  hotelsHelper.getHotels().then((hotels)=>{
    let results = hotels;
    if(stars!=0)
    results = hotels.filter(hotel=>hotel.stars===parseInt(stars));
    res.status(200).send(hotels);
  }).catch(err => {
    res.status(400).send(err);
  });
});

// RETURNS ALL THE HOTELS IN THE DATABASE
router.get('/search', function (req, res) {
  const name = req.query.name;
  const stars = req.query.stars || 0;
  console.log(name, stars)
  hotelsHelper.getHotels().then((hotels)=>{
    let results = [];
    if(stars==0)
    results = hotels.filter(hotel=>hotel.name.toLowerCase().includes(name.toLowerCase()));
    else
    results = hotels.filter(hotel=>hotel.name.toLowerCase().includes(name.toLowerCase())).filter(hotel=>hotel.stars===parseInt(stars));
    res.status(200).send(results);
  }).catch(err => {
    res.status(400).send(err);
  });
});

module.exports = router;
