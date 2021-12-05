const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app); //Create Express Server


expressServer.listen(3000, function(){
    console.log("@Server run @ 3000!")
})

