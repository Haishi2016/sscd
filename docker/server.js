'use strict';

const express = require('express');

const PORT = 8181;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res)=> {
	res.send("Welcome to SSCD");
});

app.listen(PORT, HOST);
console.log('Listening on http://${HOST}:${PORT}');
