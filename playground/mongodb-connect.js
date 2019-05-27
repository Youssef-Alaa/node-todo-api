const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
	if(err) {
		return console.log('unable to connect to MongoDB server');
	}
	console.log('Connected to mongoDB server');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err,result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	
client.close();
});