// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name:'yogi', age: 20}; // ES6 Desctrutor
// var {name} = user; 
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to mongoDB server.'); // pakai return agar kode selanjutnya tidak di eksekusi
    }
    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result)=> {
    //     if (err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
        
    // });

    // insert new doc into Users(name, age, location)
    // db.collection('Users').insertOne({
    //     // _id: 123, // set ID manual
    //     name: 'Yogi',
    //     age: 20,
    //     location: 'Bandung'
    // }, (err,result) => {
    //     if (err){
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
        
    // })

    client.close();
});