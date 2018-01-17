const mongoose = require('mongoose');

const { pw } = require('../../info');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://jschles1:${pw}@ds259117.mlab.com:59117/jschles1-node-api`);
// process.env.MONGO_URI

module.exports = {
  mongoose
};