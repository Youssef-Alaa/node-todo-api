// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('57bc4b15b3b6a3801d8c47a2')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('users').findOneAndUpdate({
    _id: new ObjectID('5cec3f336fcbd307d8434464')
  }, {
    $set: {
      email: 'youssefalaa@yahoo.com'
    }}, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
    
  // db.close();
});
