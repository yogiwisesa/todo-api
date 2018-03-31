const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// // remove all from database
// Todo.remove({}).then((result) => {
//     console.log(result);
// })

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5abfd46ed4d49c0ee96dbeba'}.then((todo) => {
    console.log(todo);
    
}))

Todo.findByIdAndRemove('5abfd46ed4d49c0ee96dbeba').then((todo)=> {
    console.log(todo);
})