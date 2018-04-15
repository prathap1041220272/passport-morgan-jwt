'use strict'
const express = require('express');
const app = express();

const port = process.env.PORT || 1234;

app.listen(port,()=>{
	console.log(`server listening on port ${port}`)
})