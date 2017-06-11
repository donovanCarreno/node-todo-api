const mongoose = require('mongoose')

// don't use 3rd party promise library
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp')

module.exports = {
  mongoose
}
