var express = require('express');
var app = express();
var fs = require('fs');
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000);

io.on('connection', function (socket) {
    socket.on("send statistics", function (statistics) {
        fs.appendFileSync("statistica.json", JSON.stringify(statistics) + "\n");
    })
});