'use strict'
const jwt =require('jsonwebtoken');
const expiresIn = '1h';
const secret = 'mySecret';

function signToken(data){
	return jwt.sign({data},{secret},{expiresIn})
}

function verify(data) {
	return jwt.verify(data,secret)
}

module.exports = {
	signToken,
	verify
}