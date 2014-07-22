var express = require('express'),
  bodyParser = require('body-parser'),
  ejs = require('ejs'),
  app = express();

// tell your app to use the module
app.use(bodyParser.urlencoded());

app.set('view engine', 'ejs');



// app.get('/articles', function(req, res){
// 	res.redirect('/articles');
	 
// });

app.get('/contact', function(req, res){
  // use a render
  res.render('site/contact');
});

app.get('/about', function(req, res){
  // use a render
  res.render('site/about');
});

app.get('/', function(req, res){
  // use a render
  res.render('site/index');
});


app.listen(3000, function(){
	console.log("SERVER STARTED ON localhost:3000");
});