const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // db.collection('Todos').find({
  //   _
  // }).toArray()
  //   .then((docs) => {
  //     console.log('Todos')
  //     console.log(JSON.stringify(docs, undefined, 2))
  //   })
  //   .catch(e => console.log('unable to fetch todos', e))

  // db.collection('Todos').find().count()
  //   .then((count) => {
  //     console.log('Todos count:', count)
  //   })
  //   .catch(e => console.log('unable to fetch todos', e))

  db.collection('Users').find({
    name: 'Donovan'
  }).toArray()
    .then((docs) => {
      console.log('Users')
      console.log(JSON.stringify(docs, undefined, 2))
    })
    .catch(e => console.log('unable to find Donovan', e))

  // db.close()
})
