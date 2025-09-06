// import  { WebSocketServer } from 'ws';

// const wss = new WebSocketServer({ port: 8080 });

// //server setting logic simulating solana price
// wss.on("connection", (socket)=>{
//     console.log("Socket is connected");
//     setInterval(() => {
//         socket.send(`Current price of solana is ${Math.random()}`)
//     }, 500);
    
// })

// console.log('WebSocket server running on ws://localhost:8080');
import  { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

//server setting logic
wss.on("connection", (socket)=>{
    console.log("Socket is connected");
    //socket level logic
    socket.on("message", (e)=>{
        const msg = e.toString().trim();
        if(msg === "ping"){
            socket.send("pong");
        } else {
            socket.send(`Server received: ${msg}`);
        }
    })
})

console.log('WebSocket server running on ws://localhost:8080');