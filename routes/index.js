var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET bauturi page.
router.get('/bauturi', function(req, res, next) {
  res.render('bauturi', {title: 'Bauturi'});
});

// GET brutarie-patiserie page.
router.get('/brutarie-si-patiserie', function(req, res, next) {
  res.render('brutarie-patiserie', {title: 'Brutarie si Patiserie'});
});

// GET carse-peste page.
router.get('/carne-si-peste', function(req, res, next) {
  res.render('carne-peste', {title: 'Carne si Peste'});
});

// GET fructe-legume page.
router.get('/fructe-si-legume', function(req, res, next) {
  res.render('fructe-legume', {title: 'Fructe si Legume'});
});

// GET lactate-branzeturi page.
router.get('/lactate-si-branzeturi', function(req, res, next) {
  res.render('lactate-branzeturi', {title: 'Lactate si Branzeturi'});
});

// GET mezeluri-realymeals page.
router.get('/mezeluri-si-readymeals', function(req, res, next) {
  res.render('mezeluri-readymeals', {title: 'Mezeluri si Readymeals'});
});

// GET conserve page.
router.get('/conserve', function(req, res, next) {
  res.render('conserve', {title: 'Consrve'});
});

// GET dulciuri-micdejun page.
router.get('/dulciuri-si-micdejun', function(req, res, next) {
  res.render('dulciuri-micdejun', {title: 'Dulciuri si Micdejun'});
});

module.exports = router;
