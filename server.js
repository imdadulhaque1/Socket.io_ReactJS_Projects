const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app); //Create Express Server
// ---------> ConnectedConfigure Socket.io with express server
const {Server} = require('socket.io');
const io = new Server(expressServer);

const path = require('path');

app.use(express.static('client_app/build'));






app.get("*", function(req, res){        // * means all path supports
    res.sendFile(path.resolve(__dirname, 'client-app', 'build', 'index.html'))
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

