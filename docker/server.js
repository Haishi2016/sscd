'use strict';

const express = require('express');
const bodyParser = require('body-parser');
var intention = require('./intention.js');
var discovery = require('./discovery.js');

const PORT = 8181;
const HOST = '0.0.0.0';

const app = express()
			.use(bodyParser.urlencoded({extended: false}))
			.use(bodyParser.json());

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
app.post('/discovery', (req, res)=> {
	var service = discovery.discover(req.body);
	if (!service)
		res.sendStatus(404);
	else
		res.send(service);
});

app.listen(PORT, HOST);
console.log('Listening on http://', HOST, ':', PORT);
