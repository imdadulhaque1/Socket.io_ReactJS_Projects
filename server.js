const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app); //Create Express Server

// ---------> ConnectedConfigure Socket.io with express server
const {Server} = require('socket.io');
const io = new Server(expressServer);


app.get("/express-server", function(req, res){
    res.end("This is from Backend!")
})



// ---------> User connection and disconnection status
io.on('connection', function(socket){
    console.log("New User Connected!")

    socket.on('disconnect', function (){
        console.log("User Disconneted!")
    })
})

//  ---------> Run expressServer
expressServer.listen(5000, function(){
    console.log("@Server run @ 5000!")
})

