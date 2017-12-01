'use strict';

const express = require('express');
var intention = require('./intention.js');

const PORT = 8181;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res)=> {
	if (!req.query.statement)
		res.sendStatus(400);
	else {
		var intent = intention.parse(req.query.statement);
		if (!intent)
			res.sendStatus(400);
		else 
			res.send(intent);
	}
});

app.listen(PORT, HOST);
console.log('Listening on http://${HOST}:${PORT}');
