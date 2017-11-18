import {BIND_SOCKET, SOCKET_FRAME} from './index'

export const bindSocket = () => {
    return {type : BIND_SOCKET}
}

export const newFrameFromSocket = (frame) => {
    return {
        type: SOCKET_FRAME,
        payload: frame
    }
}