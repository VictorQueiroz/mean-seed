'use strict';

var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', 'app/views');
app.set('view engine', 'jade');

app.use(express.static('public'));

app.get('*', function (req, res) {
	res.render('index')
})

app.listen(app.get('port'));