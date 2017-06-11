const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// Todo.remove({})
//   .then((res) => console.log(res))

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove

Todo.findOneAndRemove({ _id: '593d7830e0a8aa3b14a510a6'})
  .then((todo) => console.log(todo))

Todo.findByIdAndRemove('593d7830e0a8aa3b14a510a6')
  .then((todo) => console.log(todo))
