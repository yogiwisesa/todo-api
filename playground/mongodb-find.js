// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server.'); // pakai return agar kode selanjutnya tidak di eksekusi
    }
    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Todos').find({
    //         _id: new ObjectID('5abf5ceffe2df86f7a2cef22')
    //     }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err) => {
    //     console.log('Unable to fetch todos', err);

    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    db.collection('Users').find({
        name: 'Yogi'
    }).toArray().then((doc) => {
        console.log(JSON.stringify(doc, undefined, 2));
    })

    // client.close();
});