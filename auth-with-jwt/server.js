'use strict'
const express = require('express');
const app = express();

const port = process.env.PORT || 1234;
const db = require('./models');

require('./route')(app);


app.listen(port,()=>{
	console.log(`server listening on port ${port}`)
})