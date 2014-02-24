var mongo = require('mongodb');

var Server = mongo.Server;
var Db = mongo.Db;
var BSON = mongo.BSONPure;
var ObjectID = mongo.ObjectID;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('nmediadb', server);

db.open(function(err, db) {

	if (!err) {
		console.log('Connected to nmediadb database.');
		db.collection('nmedia', {strict:true}, function(err, collection) {
			if (err) {
				console.log('The nmedia collection doesn\'t exist...');
				populateDB();
			}
		});
	}
});


exports.findAll = function(req, res) {

	db.collection('nmedia', function(err, collection) {
		collection.find().toArray(function(err, items) {
			res.send(items);
		});

	});
	
};

exports.findById = function(req, res) {
	var id = req.params.id;
	console.log('Find conent: ' + id);
	db.collection('nmedia', function(err, collection) {
		collection.findOne({'_id':new ObjectID(id)}, function(err, item) {
			console.log('Found item: ', item);
			res.send(item);
		});

	});
};

exports.addContent = function(req, res) {
	var content = req.body;
	console.log('Adding content: ' + JSON.stringify(content));
	db.collection('nmedia', function(err, collection) {
		collection.insert(content, {w:1}, function(err, result) {
			if (err) {
				res.send({'error':'An error has occurred.'});
			} else {
				console.log('Success: ' + JSON.stringify(result[0]));
				res.send(result[0]);
			}
		});

	});

};

exports.updateContent = function(req, res) {

	var id = req.params.id;
	var content = req.body;
	console.log('Updating content: ' + id);
	console.log(JSON.stringify(content));
	db.collection('nmedia', function(err, collection) {
		collection.update({'_id': new ObjectID(id)}, content, {w:1}, function(err, result) {
			if (err) {
				console.log('Error updating content: ' + err);
				res.send({'error':'An error has occurred.'});
			} else {
				console.log('' + result + ' documents updated.');
				res.send(content);
			}
		});
	});

	
};

exports.deleteContent = function(req, res) {
	var id = req.params.id;

	db.collection('nmedia', function(err, collection) {
		collection.remove({'_id':new ObjectID(id)}, {w:1}, function(err, result) {
			if (err) {
				console.log('Error deleting content: ' + err);
				res.send({'error': 'An error has occurred.'});
			} else {
				console.log('' + result + ' document deleted');
				console.log('req.body: ', req.body);
				res.send(req.body);
			}
		});
	});
	
};

var populateDB = function() {
	var contents = [
		{
			title: 'news 1',
			description: 'description 1'
		},
		{
			title: 'news 2',
			description: 'description 2'
		},
		{
			title: 'news 3',
			description: 'description 3'
		},
		{
			title: 'news 4',
			description: 'description 4'
		},
		{
			title: 'news 5',
			description: 'description 5'
		}

	];
	db.collection('nmedia', function(err, collection) {
		collection.insert(contents, {w:1}, function(err, result) {});
	});
};

