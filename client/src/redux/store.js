import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { alertsReducer } from './reducer/alertsReducer';
import {whetherReducer} from './reducer/whetherReducer';

const composeEnhancers = composeWithDevTools({
});
const rootReducer = combineReducers({ //Created 'rootreducer' and combined reducers. 
  whetherReducer , 
  alertsReducer , 
})
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk) //applied thunk midlwr to make dispatches asyncronouse and coperate logics
  
  )   
);
export default store;