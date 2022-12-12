import socket from "./socket";

export function createSocketConnection() {
    socket.connect();
    return socket;
}

