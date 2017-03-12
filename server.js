var express = require('express');
var app = express();
var multer = require('multer');

var path = require('path');
var upload = multer({
  dest: './uploads/'
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});


app.post('/', upload.single('upl'), function (req, res, next) {
  res.send(JSON.stringify({size: req.file.size}));
  //res.status(204).end();
});


app.listen(process.env.PORT || 8080, function() {
  console.log('Example app listening');
});
