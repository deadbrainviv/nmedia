var express = require('express');
var contents = require('./routes/contents');
var path = require('path');
var app = express();

app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/contents', contents.findAll);

app.get('/contents/:id', contents.findById);
app.post('/contents', contents.addContent);
app.put('/contents/:id', contents.updateContent);
app.delete('/contents/:id', contents.deleteContent);

app.listen(8080);
console.log('listening on port 8080');

