const { ObjectId } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5abfc48fc17ba654551fe8f8';

// if (!ObjectId.isValid(id)){
//     console.log('ID not valid');
    
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);

// })

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo with id', todo);
// }).catch((e) => console.log(e));

User.findById('5abfaf5311b3923f0a22b764').then((user) => {
    if (!user){
        return console.log('User id not found');
        
    }
    console.log('user with id ', user);
    
}, (e) => {
    console.log(e);
    
})