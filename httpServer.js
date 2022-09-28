const http =require('http');

http.createServer(function(request,response){

    response.writeHead(200,{'content-type':"text/plain"});
    response.write("welcome to the SyamNodes");
    response.end();
}).listen(4200,function(){
    console.log("your server is running in 4200 port.....")
})
