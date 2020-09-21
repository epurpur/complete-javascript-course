
const fs = require('fs');    //filesystem module. This is a core node module
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8')  //home folder
const laptopData = JSON.parse(json);


const server = http.createServer((req, res) => {  
	//this callback function runs every time someone accesses our web server

	//we have a response each time someone accesses the server. 
	const pathName = url.parse(req.url, true).pathname;
	const id = url.parse(req.url, true).query.id;

	if (pathName === '/products' || pathName === '/') {
		res.writeHead(200, { 'Content-type': 'text/html'})  //says we have a response, and a content type
		res.end('This is the PRODUCTS page');  //sends response itself
	} 

	else if (pathName === '/laptop' && id < laptopData.length) {
		res.writeHead(200, { 'Content-type': 'text/html'})  
		res.end(`This is the LAPTOP page for laptop ${id}`);
	}

	else {
		res.writeHead(404, { 'Content-type': 'text/html'})  
		res.end('URL was not found on the server'); 
	}


});  


// must listen on specific port and IP address
server.listen(1337, '127.0.0.1', () => {
	console.log('Listening for requests now');

});

