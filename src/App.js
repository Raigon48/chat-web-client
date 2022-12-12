import React, {useState} from 'react';
import { createSocketConnection } from "./sockets/socketEvents";

function App() {
  const [connected, setConnected] = useState(false);
  const [socketId, setSocketId] = useState('');

  const connect = () => {
    const socket = createSocketConnection();
    socket.on('connect', () => {
      setConnected(socket.connected);
      setSocketId(socket.id);
    })
  }

  return (
    <div className="App">
      <button onClick={connect}>Connect</button>
      <div>{connected ? `user connected ${socketId}`: `Failed to connect`}</div>
    </div>
  );
}

export default App;
