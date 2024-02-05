import { applyMiddleware, legacy_createStore as createStore,compose} from 'redux'
import { rootReducer } from './reducer'
import {thunk} from 'redux-thunk';
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store =createStore(rootReducer,enhancer);
export {store}