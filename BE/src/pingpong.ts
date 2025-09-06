import  { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

//server setting logic
wss.on("connection", (socket)=>{
    console.log("Socket is connected");
    //socket level logic
    socket.on("message", (e)=>{
        // console.log(e.toString());
        // console.log(e.toString() === "ping");
        const msg = e.toString().trim();
        if(msg === "ping"){
            socket.send("pong");
        }
    })
})

console.log('WebSocket server running on ws://localhost:8080');