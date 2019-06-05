var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

var User = mongoose.model('Libro2',schema,'libros2');

//Documento en RAM
var user = new User({
    title: 'Tuneles',
    author: 'Roderick Gordon',
    body: '101'
});

//Documento en mongoDB
user.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.exit(0);
});
