const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // deleteMany
  // db.collection('Todos').deleteMany({ text: 'More stuff' }).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'Yes' }).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // Returns deleted document
  // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({ name: 'Mike' }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({ _id: new ObjectID("5a5bf9ef022232108fcae52f") }).then((result) => {
    console.log(result);
  });

  db.close();
});