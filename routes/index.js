var express = require('express');
var router = express.Router();
//Require PG and Sequelize For Migrations
const models = require('../models');
const Post = models.post;

// const testpost = Post.build({
//   body:'Its fun when you put together something that you thought you could no do',
//   alias:'Yayy!'
// }).save().then((newpost)=>{
//   console.log(newpost);
// })


 router.get( '/', function ( req, res ) {
   Post.findAll().then( function ( posts ) {
     res.render( 'index', {
       posts: posts
     } );
   } );
 } );

/* GET home page. */
// router.get( '/', ( req, res, next ) => {
//   const allPost = Post.findAll()
//     .then((res,posts)=>{
//       // res.render( 'index',posts );
//       res.send(posts);
//   })
//   res.render('index');
// });
router.post('/post',(req,res)=>{
  const newpost = Post.build({
    body:req.body.body,
    alias:req.body.alias
  }).save().then((lognewPost)=>{
    res.redirect( '/' );
  })
  
})
router.get('/about', (req,res,next)=>{
  res.render('about');
});

router.get('/projects',(req,res,next)=>{
  res.render('projects');
});
router.get('/contact',(req,res,next)=>{
  res.render('contact');
})
module.exports = router;
