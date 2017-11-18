import {SOCKET_FRAME} from '../actions/index'

export const frameListReducer = (state = [], action) =>{
    console.log(state)
    switch(action.type){
        case SOCKET_FRAME : 
        return [...state, action.payload]
        default : state
    }
    return state
}