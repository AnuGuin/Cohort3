import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = () => {
    if(!socket || socket.readyState !== WebSocket.OPEN){
      alert('WebSocket is not connected');
      return;
    }

    const message = inputRef.current?.value;
    if (!message) {
      alert('Please enter a message');
      return;
    }

    socket.send(message);
    if (inputRef.current) {
      inputRef.current.value = ''; // Clear input after sending
    }
  }

  useEffect(()=>{
    const websocket = new WebSocket("ws://localhost:8080");
    setSocket(websocket);

    websocket.onmessage = (ev) => {
      console.log('Received message:', ev.data);
      alert(ev.data);
    };

    websocket.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      websocket.close();
    };
  },[])

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='Message..'></input>
      <button onClick={sendMessage} style={{marginLeft : "8px"}}>Send</button>
    </div>
  )
}

export default App;
