const mongoose = require('mongoose');

const { pw } = require('../../info');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
// process.env.MONGO_URI

module.exports = {
  mongoose
};