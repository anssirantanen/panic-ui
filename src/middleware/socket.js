import {BIND_SOCKET} from '../actions/index'
import {newFrameFromSocket} from '../actions/socket'

const tempURL= 'ws://localhost:9000/sock'
var socket

const openSocket = (ws,store) => {
    
}
const closeSocket = (ws,store) => {
    
}
const onMessage = (ws,store) => event => {
    console.log(event.data);
    store.dispatch(newFrameFromSocket(event.data))
}


export const socketMiddleware = store => next => action =>{
    switch(action.type){
        case BIND_SOCKET:
            if(socket){
                socket.close()
            }
            socket = new WebSocket(tempURL)
            socket.onmessage = onMessage(socket,store)
            socket.onopen = openSocket(socket, store)
            socket.onclose = closeSocket(socket,store)
            break
        default: 
            return next(action)       
    }
}
export default socketMiddleware
