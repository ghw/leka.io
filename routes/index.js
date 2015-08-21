var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Discover {{productName}}', lang: 'en' });
});

router.get('/en', function(req, res) {
  res.render('index', { title: 'Discover {{productName}}', lang: 'en' });
});

router.get('/pre-order', function(req, res) {
  res.render('index', { title: 'Pre-order {{productName}}', lang: 'en' });
});

router.get('/fr', function(req, res) {
  res.render('index', { title: 'Découvrez {{productName}}', lang: 'fr' });
});

router.get('/fr/pre-order', function(req, res) {
  res.render('index', { title: 'Précommandez {{productName}}', lang: 'fr' });
});

module.exports = router;
