const mongoose = require('mongoose')

// don't use 3rd party promise library
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

module.exports = {
  mongoose
}
