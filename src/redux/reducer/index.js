import {combineReducers} from 'redux'
import { CounterReducer } from './counter.reducer'
const rootReducer = combineReducers({
   counter:CounterReducer
})

export {rootReducer}