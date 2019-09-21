const express = require('express');
const router = express.Router();

// const models = require('../models');
// const Post = models.post;

router.get( '/', (req, res) => res.render('index'));

//  router.get( '/', function ( req, res ) {
//    Post.findAll().then( function (posts) {
//      res.render( 'index', {posts} );
//     });
//  });
 
// //Post Form Handler Route
// router.post('/post',(req,res)=>{
//   const newpost = Post.build({
//     body:req.body.body,
//     alias:req.body.alias
//   }).save().then((lognewPost)=>{
//     res.redirect( '/' );
//   })
  
// })

router.get('/projects',(req, res, next)=>{
  res.render('projects');
});

router.get('/contact',(req, res, next)=>{
  res.render('contact');
})

module.exports = router;
