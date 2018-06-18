var express = require('express');
//Require PG and Sequelize For Migrations
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req,res,next){
  res.render('about');
});

router.get('/projects',function(req,res,next){
  res.render('projects');
});
router.get('/contact',function(req,res,next){
  res.render('contact');
})
module.exports = router;
