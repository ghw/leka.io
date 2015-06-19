var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Discover Brio', lang: 'en' });
});

router.get('/en', function(req, res) {
  res.render('index', { title: 'Discover Brio', lang: 'en' });
});

router.get('/pre-order', function(req, res) {
  res.render('index', { title: 'Pre-order Brio', lang: 'en' });
});

router.get('/fr', function(req, res) {
  res.render('index', { title: 'Découvrez Brio', lang: 'fr' });
});

router.get('/fr/pre-order', function(req, res) {
  res.render('index', { title: 'Précommandez Brio', lang: 'fr' });
});

module.exports = router;
