const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400)
            .send(e);
    })
})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ // dijadikan objek agar nanti bisa nambah atribut di response nya
            todos
        })
    }, (e) => {
        res.status(400).send(e);
    })
})

// GET /todos/{id}
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    // Validate id using isValid
        // not valid return 404 ~ send back empty send
    if (!ObjectId.isValid(id)){
        res.status(404).send();
        console.log('id is not valid');
    }

    // findById
        // success
            // if todo - send it back
            // if no todo - send back 404 with empty body
        // error
            // send back 400 - send back empty body back
    Todo.findById(id).then((todo) => {
        if (!todo){
            return res.status(404).send();
        }

        res.send({todo})
    }, (e) => {
        res.status(404).send();
    })
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    // get Id
    // validate the id
        // not valid -> return 404
    if (!ObjectId.isValid(id)){
        res.status(404).send();
        console.log('id is not valid');
    }
    // remove todo by id
        // success
            // if no doc, send 404
            // if doc , send back with 202
        // error
            //return 404 w/ empty body
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo){
           return res.status(404).send();
        } 
        res.send({todo})
    }, (e) => {
        res.status(404).send();
    })
})

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
 
    if (!ObjectId.isValid(id)){
        res.status(404).send();
        console.log('id is not valid');
    }

    if (_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
   
    
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo){
            return res.status(404).send();
        }
        
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    })
})

app.listen(port, () => {
    console.log(`Started on port ${port}`);
})


module.exports = {app};