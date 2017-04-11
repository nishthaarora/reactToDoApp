const mongoose = require('mongoose');
const Todo = require('../models/todoModel');

exports.get = (req, res) => {
    Todo.find({}).exec( (err, data) => {
        if(err) {
            console.log(err)
        } else {
            res.send({data: data});
        }
    })
}

exports.create = (req, res) => {
    var newItem = new Todo({ description:req.body.newItem, status: req.body.status })
    newItem.save( (err) => {
        if(err) {
            res.status('500').json({ status: 'error', message: 'Cannot save new game.'});
        } else {
            res.send({status: 'ok'});
        }
    })   
}
