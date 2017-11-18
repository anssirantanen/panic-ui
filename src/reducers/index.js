
import { combineReducers } from 'redux';

const fakeRed = (state = [], action) => {
    console.log(action)
    return ['1','2']
}


const rootReducer = combineReducers({
  fake: fakeRed
});

export default rootReducer;