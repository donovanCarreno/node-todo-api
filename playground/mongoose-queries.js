const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// const id = '593c0823fa0fe95329a61c17'
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }
//
// Todo.find({ _id: id })
//   .then((todos) => {
//     console.log('Todo', todos)
//   })
//
// Todo.findOne({ _id: id })
//   .then((todo) => {
//     console.log('Todo', todo)
//   })
//
// Todo.findById(id)
//   .then((todo) => {
//     if (!todo) {
//       return console.log('id not found')
//     }
//     console.log('Todo By Id', todo)
//   })
//   .catch(e => console.log(e))

const id = '59389432d653d2fc0ca9225a'

User.findById(id)
  .then((user) => {
    if (!user) {
      return console.log('user not found')
    }
    console.log('User', user)
  })
  .catch(e => console.log(e))
