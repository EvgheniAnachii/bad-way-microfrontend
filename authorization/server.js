
const express = require('express')
var app = module.exports = express();
const http = require('http')
const path = require('path')
const hostname = 'localhost';
const port = 8080;

const server = http.Server(app)

app.use(express.static(path.join(__dirname, 'dist')));

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
