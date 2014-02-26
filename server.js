var express = require('express');
var contents = require('./routes/contents');
var path = require('path');
var app = express();

app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.configure('development', function(){
	console.log('Starting to configure development environment.');
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('production', function(){
	console.log('Starting to configure production environment.');
    app.use(express.static(path.join(__dirname, 'dist')));
});


// Restful API for contents application demo
app.get('/contents', contents.findAll);

app.get('/contents/:id', contents.findById);
app.post('/contents', contents.addContent);
app.put('/contents/:id', contents.updateContent);
app.delete('/contents/:id', contents.deleteContent);

app.listen(8080);
console.log('listening on port 8080');

