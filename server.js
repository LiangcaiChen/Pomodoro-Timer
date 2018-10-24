const io = require('socket.io')();

io.on('connection', (socket) => {
    console.log("made socket connection");

    socket.on("timer", (minute,second)=> {
        socket.broadcast.emit('timer', minute,second);
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);