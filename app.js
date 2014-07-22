var express = require('express'),
  bodyParser = require('body-parser'),
  ejs = require('ejs'),
  app = express();

// tell your app to use the module
app.use(bodyParser.urlencoded());

app.set('view engine', 'ejs');

var articles = [];


 
//Added the static pages
// Routes

app.get('/articles', function(req, res) {
	res.render('articles/articles', { articles: articles });
});

app.get('/articles/:id', function(req, res) {
	var index = req.params.id;
	var article = articles[index];
	res.render('articles/show', { article: article });
});

app.get('/articles/new', function(req, res) {
	res.render('articles/new');
});

app.post('/articles', function(req, res) {
	articles.push(req.body.article);
	console.log(req.body.article);
	res.redirect('/articles');
});

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