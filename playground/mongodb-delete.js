// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server.'); // pakai return agar kode selanjutnya tidak di eksekusi
    }
    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');
   
    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // })
    
    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
        
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) =>{
    //     console.log(result);
    // })

    // COLLECTION : USERS
    //deleteMany
    db.collection('Users').deleteMany({
        name: 'Yogi'
    }).then((result) => {
        console.log(result);
    })

    //DeleteOne
    db.collection('Users').deleteOne({
        name: 'Joko'
    }).then((result) => {
        console.log(result);
    })

    // FindOneAndDelete
    db.collection('Users').findOneAndDelete({
        name: 'Mike'
    }).then((result) => {
        console.log(result);
        
    })
    
    // client.close();
});