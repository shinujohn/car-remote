var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('client connected');
  socket.on('control', function(data){
    console.log(data);
    io.emit('control', data);
  });
});

var port = process.env.port || 3000;
http.listen(port, function(){
  console.log('listening on ' + port);
});
