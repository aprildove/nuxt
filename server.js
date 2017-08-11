// var express = require('express');
// var path = require('path');
// var ejs = require('ejs');
// var app = express();

// // app.set('views',path.resolve(__dirname , 'dist') );
// app.engine('.html', require('ejs').__express);  
// app.set('view engine', 'html');
// app.use(express.static('dist'));
// app.get('/articles/gaza-cybergang-apt-sample', function (req, res) {
// 	console.log('ttttttttttt sample')
//   // res.render('articles/gaza-cybergang-apt-sample/index.html');
// });
// app.get('/', function (req, res) {
// 	console.log('ttttttt index')
//   // res.render('index.html');
// });


// var server = app.listen(3001, '127.0.0.1',function () {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('Example app listening at http://%s:%s', host, port);
// });
var express = require('express')
var app = express()
var path = require('path')
// 静态资源服务
app.engine('.html', require('ejs').__express);
app.use(express.static(path.resolve(__dirname, 'dist')))
app.set('views', path.resolve(__dirname, 'dist'))
app.get('/', function (req, res) {
	console.log('iiiiiiiiiiiiiiiii')
  res.render('test.html')
})
app.get('/articles', function (req, res) {
	console.log('ssssssssssss sample')
  res.render('article.html');
});
// app.get('/api/test', function (req, res) {
//   res.send({ name: 'leijun test' })
// })
// app.get('/api/index', function (req, res) {
//   res.send({ name: 'leijun' })
// })
app.listen('4000', function () {
  console.log('Example app listening at http://127.0.0.1:4000');
})