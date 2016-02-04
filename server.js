var http=require('http');

var handleRequest = function(request,response){
	response.writeHead(200);
	response.end("!!!Beecon Changes go here!!!");
}

var www = http.createServer(handleRequest);
www.listen(8000);
