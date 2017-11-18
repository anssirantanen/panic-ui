import { combineReducers } from 'redux'
import {frameListReducer} from './frame_list'

const fakeFrame = (state = [], action) => {
  console.log(action)
    return [...state, action.payload]
}


const rootReducer = combineReducers({
  frames: frameListReducer
});

export default rootReducer;