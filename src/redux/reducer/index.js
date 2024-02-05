import {combineReducers} from 'redux'
import { CounterReducer } from './counter.reducer'
import productReucer from './product.reducer'
import getProductReducer from './getProductById.reducer'
const rootReducer = combineReducers({
   counter:CounterReducer,
   products:productReucer,
   singleProduct:getProductReducer
})

export {rootReducer}