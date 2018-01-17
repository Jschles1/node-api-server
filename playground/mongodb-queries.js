const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5a5d67c0b12f150937df7785';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid.');
// }

// Todo.find({
//   // Converts to ObjectID
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   // Converts to ObjectID
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found.');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

const userId = '5a5d51f8b7dc347636823a2c';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User not found.');
  }
  console.log('User: ', user);
}).catch((e) => console.log(e));