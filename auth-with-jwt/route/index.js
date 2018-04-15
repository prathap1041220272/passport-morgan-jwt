'use strict'
const user = require('./user');
const bodyParser = require('body-parser');
const { token } = require('../service');

function routes(app){
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());

	app.use('/auth',user);

	app.use('/api/',(req,res,next)=>{
		const token = (req.headers ||{}).authorization;
		if (!token) {
			return res.status(401).json({message:'user not authorized'})
		}
		let decodedToken;
		try{
			decodedToken =  tokenServ.verify(token);
			next(error);
		}
	})
	app.use((error,req,res,next)=>{
		const {message,status}=error||{};
		res.status(status||500).json({message});
	})
}

module.exports= routes;