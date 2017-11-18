import {BIND_SOCKET} from '../actions/index';

const tempURL= 'ws://localhost:9000/sock';


var socket;

const openSocket = (ws,store) => {
    
}
const closeSocket = (ws,store) => {
    
}
const onMessage = (ws,store) => evt => {
    console.log(evt.data);
}


export const socketMiddleware = store => next => action =>{
    switch(action.type){
        case BIND_SOCKET:
            if(socket){
                socket.close();
            }
            socket = new WebSocket(tempURL);
            socket.onmessage = onMessage(socket,store);
            socket.onopen = openSocket(socket, store);
            socket.onclose = closeSocket(socket,store);
            break;
        default: 
            return next(action);        
    }
}
export default socketMiddleware
