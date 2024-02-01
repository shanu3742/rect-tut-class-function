import {combineReducers} from 'redux'
import { CounterReducer } from './counter.reducer'
import productReucer from './product.reducer'
const rootReducer = combineReducers({
   counter:CounterReducer,
   products:productReucer
})

export {rootReducer}