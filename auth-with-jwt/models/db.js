'use strict'
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sampledata')
.then((data)=>{
	console.log('DataBase connected to the server')
})
.catch((error)=>{
	console.log(err.message)
})

module.exports = mongoose;
