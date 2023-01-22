var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if(req.url=="/welcome"){
    res.writeHeader(200,{"Content-Type":"text/plain"});
    res.end("welcome to Dominos!")
  }else if(req.url=="/contact"){
    res.writeHeader(200,{"Content-type":"application/json"});
    res.end(JSON.stringify({
        phone: '18602100000', 
  	email: 'guestcaredominos@jublfood.com'
    }))
  }else{
    res.writeHeader(404,{"Content-Type":"text/plain"})
    res.end("Page not found")
  }
}
httpServer.listen(8081,()=>{
  console.log("server is up");
})

module.exports = httpServer;